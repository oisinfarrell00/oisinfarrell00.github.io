---
id: designing-data-intensive
title: Designing Data-Intensive Applications - Martin Kleppmann
date: Mar 20, 2026
type: Book Notes
status: Complete
category: SYSTEMS DESIGN
description: Distributed systems patterns and trade-offs
excerpt: Distributed systems patterns and trade-offs
---

# Introduction

Martin Kleppmann's "Designing Data-Intensive Applications" provides a comprehensive treatment of the principles and trade-offs involved in building systems that handle large-scale data. Rather than focusing on specific technologies, the book emphasizes fundamental concepts that transcend particular implementations.

The text covers data models, storage engines, replication, partitioning, transactions, consistency models, and batch/stream processing. Each chapter examines the theoretical foundations, practical implementations, and inherent trade-offs that system designers must navigate.

For practitioners building distributed systems, this book serves as both a conceptual foundation and a practical guide. Understanding these principles enables informed technology choices and helps avoid common pitfalls in distributed system design.

# Reliability, Scalability, and Maintainability

The book opens by defining key concerns for data systems: reliability (continuing to work correctly despite faults), scalability (handling growth in data volume, traffic, or complexity), and maintainability (enabling productive work by different people over time).

These concerns often conflict: techniques that improve reliability (like redundancy) may complicate maintainability; approaches that enhance scalability (like sharding) can undermine reliability. System design involves navigating these trade-offs rather than optimizing a single dimension.

Kleppmann emphasizes that the specifics matter: "scalability" is not a one-dimensional property but a multifaceted challenge that depends on the type of growth, the existing architecture, and the organization's needs. Generic solutions rarely exist.

# Data Models and Query Languages

Different data models—relational, document, graph—suit different use cases. Relational databases excel at structured data with complex queries; document databases better handle semi-structured data with varying schemas; graph databases naturally express connected data.

The choice of data model affects not just query capabilities but also how applications are structured, how schemas evolve, and what kind of scaling is possible. This choice represents a fundamental architectural decision with long-lasting implications.

Modern applications often use multiple data models (polyglot persistence), with different systems for different data types and access patterns. This flexibility comes at the cost of increased complexity in maintaining consistency across systems.

# Storage and Retrieval

Storage engines divide into two broad categories: log-structured (append-only with periodic compaction) and page-oriented (in-place updates). Log-structured storage (like LSM-trees) optimizes for write throughput; B-trees optimize for read performance.

Understanding these trade-offs enables informed choices: write-heavy workloads may favor LSM-trees; read-heavy workloads with strong consistency needs may prefer B-trees. No single storage engine optimizes all workloads.

The text details implementation strategies—compaction, indexing, caching—that bridge theory and practice. These mechanisms involve fundamental trade-offs between write amplification, read amplification, and space amplification that cannot be simultaneously optimized.

# Replication and Partitioning

Replication (copying data across multiple machines) provides fault tolerance and enables scaling read capacity. However, replication introduces consistency challenges: how do we ensure replicas agree despite failures, network delays, and concurrent updates?

Different replication approaches—single-leader, multi-leader, leaderless—involve different trade-offs. Single-leader replication simplifies consistency but creates a bottleneck; multi-leader and leaderless replication improve availability but complicate conflict resolution.

Partitioning (splitting data across machines) enables scaling beyond a single machine's capacity. Partitioning strategies must balance data distribution (avoiding hotspots) against query efficiency (minimizing cross-partition queries). Rebalancing partitions as the cluster grows introduces additional complexity.

# Transactions and Consistency

Transactions provide useful guarantees: atomicity (all-or-nothing execution), consistency (invariants are preserved), isolation (concurrent transactions don't interfere), and durability (committed data is not lost). However, implementing these guarantees in distributed systems is challenging.

Different isolation levels—read committed, snapshot isolation, serializability—provide different guarantees with different performance implications. Stronger isolation simplifies application logic but reduces concurrency; weaker isolation improves performance but requires careful handling of anomalies.

Distributed transactions face fundamental limits: the CAP theorem shows that systems must trade off consistency, availability, and partition tolerance. Different applications require different trade-offs, and understanding these constraints enables informed architectural decisions.

# Consensus and Coordination

Achieving consensus—getting multiple nodes to agree—is fundamental to distributed systems. Consensus algorithms like Raft and Paxos provide fault-tolerant agreement despite node failures and network issues.

Consensus enables critical building blocks: leader election, atomic commit, and state machine replication. Many distributed coordination tasks reduce to consensus, making these algorithms foundational.

However, consensus is expensive: it requires multiple round-trips and cannot tolerate too many failures. Modern systems increasingly explore coordination-free approaches that avoid consensus when possible, trading off consistency for performance.

# Batch and Stream Processing

Batch processing (MapReduce, Spark) handles large-scale data processing by distributing computation across many machines. The functional programming model—processing data through a sequence of transformations—simplifies reasoning about correctness and enables automatic fault tolerance.

Stream processing extends these ideas to unbounded data, processing events as they arrive rather than waiting for complete datasets. Systems like Kafka and Flink enable real-time analytics and continuous computation.

The convergence of batch and stream processing—through technologies like Apache Beam—suggests that the fundamental patterns are similar. Understanding these patterns enables building systems that handle both batch and streaming workloads.

# Derived Data and Integration

Many systems maintain derived data—materialized views, caches, indexes—that can be recomputed from primary data. Managing these derived datasets introduces consistency challenges: how do we ensure derived data stays synchronized with primary data?

Change data capture, event sourcing, and CQRS represent patterns for managing derived data. These approaches treat data flow as a series of events, enabling downstream systems to maintain consistent derived datasets.

System integration—connecting multiple databases, caches, and search indexes—represents a major challenge in modern architectures. Understanding data flow and consistency models enables designing robust integration strategies.

# Conclusion

"Designing Data-Intensive Applications" provides a comprehensive foundation for understanding distributed systems. By emphasizing principles over specific technologies, it equips readers to make informed decisions as technologies evolve.

The recurring theme is trade-offs: reliability vs. performance, consistency vs. availability, simplicity vs. flexibility. Effective system design requires understanding these trade-offs and making choices appropriate to specific requirements rather than applying generic "best practices."

For anyone building systems that handle substantial data or traffic, this book offers essential knowledge. The concepts presented remain relevant regardless of which specific technologies one uses, making it a valuable long-term investment in understanding distributed systems.
