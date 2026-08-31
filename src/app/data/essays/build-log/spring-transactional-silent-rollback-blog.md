---
id: spring-transactional-silent-rollback-blog
title: Spring Transactions and the Silent Rollback
date: August 24, 2026
type: Debugging
status: Published
category: POST-MORTEM
description: A day-long debugging story about why a batch export's error message was always null — Spring's @Transactional, AOP proxies, and the REPEATABLE READ trap.
excerpt: A day-long debugging story about why a batch export's error message was always null — Spring's @Transactional, AOP proxies, and the REPEATABLE READ trap.
---

# Spring Transactions and the Silent Rollback: A Bug Story

Recently I fixed a bug that had been lurking in a batch export feature for a while. The symptom was simple: when an export failed, the error message we wrote to the database was always `null`. The fix took a day to understand and about twenty lines of code to implement. Here is the full story.

---

## The Problem

We had a service that runs a batch export job. When the export fails, we want to record *why* it failed — storing an error message on the batch record so operators can see what went wrong.

The original code looked roughly like this:

```java
@Service
public class BatchExportService {

    private final BatchRepository batchRepository;
    private final ExportFileGenerator exportFileGenerator;

    @Transactional
    public void runExport(Integer batchId) {
        Batch batch = batchRepository.findById(batchId).orElseThrow();

        try {
            exportFileGenerator.generate(batch);
        } catch (Exception e) {
            batch.setError(e.getMessage()); // record why it failed
            throw e;                        // bubble the exception up
        }
    }
}
```

Looks reasonable, right? If the export fails, we set the error on the batch and rethrow. The problem is: **this never works**. The `error` field in the database is always `null` after a failure.

---

## Why It Fails — The Golden Rule of `@Transactional`

Spring's `@Transactional` annotation works on a simple contract:

> **The transaction commits when the method returns normally. If an exception escapes the method, the transaction rolls back.**

In our code, we catch the exception, write the error, then immediately rethrow it. That rethrow causes a rollback — which undoes *every* write made inside the transaction, including the `batch.setError(...)` call we just made.

```
runExport() starts           → transaction opens
  batch.setError("...")      → staged in transaction (not yet in DB)
  throw e                    → exception escapes the method
                             → ROLLBACK — all staged writes are discarded
                             → DB never sees the error
```

The write and the rollback happen in the same transaction. The rollback wins. The error vanishes.

---

## First Instinct — Extract a Method

The first thought is: *put the error write in its own method with `REQUIRES_NEW` so it commits independently*.

```java
@Service
public class BatchExportService {

    @Transactional
    public void runExport(Integer batchId) {
        Batch batch = batchRepository.findById(batchId).orElseThrow();

        try {
            exportFileGenerator.generate(batch);
        } catch (Exception e) {
            persistError(batchId, e.getMessage()); // <- won't work
            throw e;
        }
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW) // <- IGNORED
    private void persistError(Integer batchId, String error) {
        Batch batch = batchRepository.findById(batchId).orElseThrow();
        batch.setError(error);
    }
}
```

This does not work either. The `@Transactional(REQUIRES_NEW)` annotation on `persistError` is completely ignored.

### Why? The Proxy Problem.

Spring implements `@Transactional` using AOP proxies. When another bean calls `runExport()`, the call passes through a Spring-generated proxy object that wraps the method in transaction logic. But when `runExport()` calls `this.persistError()` inside the same class, it bypasses the proxy entirely — the call goes straight to the real object, and Spring has no chance to apply the `REQUIRES_NEW` logic.

```
External bean → [Spring Proxy] → runExport()        ✅ transaction applied
runExport()   →  this.persistError()                ❌ proxy bypassed, annotation ignored
```

This is a well-known Spring gotcha: `@Transactional`, `@Async`, `@Cacheable` — any Spring AOP annotation — is silently ignored when called via `this`.

---

## The Fix — A Separate Bean

The solution is to move the error-persisting logic into its own `@Service` class. Because it is a separate bean, calls to it go through the proxy, and `REQUIRES_NEW` works correctly.

```java
@Service
class BatchErrorPersister {

    private final BatchRepository batchRepository;

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void persistError(Integer batchId, String message) {
        Batch batch = batchRepository.findById(batchId).orElseThrow();
        batch.setError(message);
        // No explicit save() needed — JPA dirty-checking flushes on commit
    }
}
```

```java
@Service
public class BatchExportService {

    private final BatchRepository batchRepository;
    private final ExportFileGenerator exportFileGenerator;
    private final BatchErrorPersister batchErrorPersister; // separate bean

    @Transactional
    public void runExport(Integer batchId) {
        Batch batch = batchRepository.findById(batchId).orElseThrow();

        try {
            exportFileGenerator.generate(batch);
        } catch (Exception e) {
            batchErrorPersister.persistError(batchId, e.toString()); // goes through proxy
            throw e;
        }
    }
}
```

Now the call path looks like this:

```
runExport() starts                     → T_outer opens
  exportFileGenerator.generate() fails
  batchErrorPersister.persistError()   → [Spring Proxy] → REQUIRES_NEW suspends T_outer
                                       → T_inner opens
                                         batch.setError("...")
                                       → T_inner COMMITS  ✅ error is in DB
  throw e                              → T_outer ROLLS BACK
                                       → export writes undone, but error survives
```

`REQUIRES_NEW` suspends the outer transaction, opens a fresh independent one, commits it, and then the outer transaction resumes (and rolls back). The two transactions are completely independent.

---

## Pitfall — Don't Pass the Entity Across Transaction Boundaries

An earlier version of this fix passed the `Batch` entity itself into `persistError`:

```java
// DON'T do this
batchErrorPersister.persistError(batch, e.toString());

@Transactional(propagation = Propagation.REQUIRES_NEW)
public void persistError(Batch batch, String message) {
    batch.setError(message); // mutating an entity from a different transaction
}
```

This causes an `OptimisticLockingFailureException`. Here is why.

JPA entities carry a `@Version` field (a counter) for optimistic locking. When `REQUIRES_NEW` commits the entity, it increments the version in the DB from 0 to 1. When the outer transaction (still holding a reference to the entity at version 0) later tries to flush its own state, Hibernate looks for a row where `version = 0`, finds nothing (it is now 1), and throws.

**Rule:** never pass a managed JPA entity from one transaction boundary to another. Pass the ID and any values you need, and let each transaction load its own fresh copy.

---

## Pitfall — `e.getMessage()` Can Return Null

A small but real issue: `Exception.getMessage()` returns `null` for exceptions that were constructed without a message — for example, a bare `new NullPointerException()`. If you pass `e.getMessage()` as the error string and get `null`, you have silently stored nothing.

Use `e.toString()` instead. It always returns a non-null string like `"java.lang.NullPointerException"` or `"java.lang.NullPointerException: some detail"`.

```java
// Fragile — can store null
batchErrorPersister.persistError(batchId, e.getMessage());

// Safe — always stores something
batchErrorPersister.persistError(batchId, e.toString());
```

---

## Bonus — The REPEATABLE READ Trap in the Scheduler

There was one more wrinkle. A scheduler orchestrated the whole flow: create the batch, then export it. We discovered that after the creation step committed, the export step could not see the newly created batch.

The reason is MySQL's default isolation level: **REPEATABLE READ**. When a transaction takes its first read, it records a "snapshot" of the database at that moment. All subsequent reads in that transaction see that snapshot — even if other transactions commit new rows in the meantime.

```
Scheduler transaction starts  → snapshot taken (batch doesn't exist yet)
  BatchCreationService (REQUIRES_NEW) creates batch → commits ✅
  Scheduler tries to load batch → invisible! (outside the snapshot)
```

The fix: annotate the scheduler method with `@Transactional(NOT_SUPPORTED)`. This suspends any outer transaction entirely for the duration of the method, so no snapshot is taken. Each child transaction (`REQUIRES_NEW`) operates in its own bubble and commits normally, and subsequent reads run in auto-commit mode against the latest DB state.

```java
@Transactional(propagation = Propagation.NOT_SUPPORTED)
public void runScheduledExport(ScheduledJob job) {
    // No outer transaction here — no snapshot problem
    Integer batchId = batchCreationService.create(job); // REQUIRES_NEW, commits
    exportService.export(batchId, job);                 // REQUIRES_NEW, can see the batch
}
```

---

## Learnings

**1. `@Transactional` and rethrowing don't mix.**
If you need to do something *before* a rollback, that thing needs its own independent transaction. A try/catch inside a `@Transactional` method cannot persist anything if it rethrows.

**2. `REQUIRES_NEW` only works on separate beans.**
Spring's AOP proxies are bypassed on `this.*` calls. Any Spring AOP annotation (`@Transactional`, `@Async`, `@Cacheable`) is silently ignored when you call a method on the same class. Extract to a separate bean.

**3. Never pass managed JPA entities across transaction boundaries.**
Pass IDs and values. Let each transaction load its own copy. Shared entity references across transactions lead to optimistic locking failures.

**4. Use `e.toString()`, not `e.getMessage()`.**
`getMessage()` returns `null` for exceptions with no message. `toString()` is always safe.

**5. REPEATABLE READ can hide data committed after your snapshot.**
If a scheduler or orchestrator runs under a transaction and calls code that commits in a `REQUIRES_NEW`, the outer transaction may not be able to see what was committed. `NOT_SUPPORTED` on the outer method prevents any snapshot from forming and solves this.

**6. JPA dirty-checking makes explicit `save()` redundant.**
If you load an entity within a `@Transactional` method and mutate it, JPA will flush the change to the DB on commit automatically. An explicit `repository.save(entity)` on an already-managed entity is dead code.
