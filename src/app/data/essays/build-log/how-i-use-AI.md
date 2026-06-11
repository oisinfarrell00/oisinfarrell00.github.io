---
id: how-i-use-AI
title: How I use AI
date: June 11, 2026
type: Thought
status: Published
category: GUIDE
description: How I use AI
excerpt: How I use AI
---

# My AI Playbook: How I Actually Use Artificial Intelligence

There is a lot of hype surrounding AI, but as a builder, the only thing that matters is utility. Over the last couple of years, I’ve moved past the novelty phase and integrated AI into my daily workflow as a force multiplier.

I don't let it run on autopilot. Instead, I treat it as a highly capable assistant that requires clear guardrails, strict boundaries, and human oversight.

Here is the exact playbook of how I use AI for learning, development, and automation.

---

# Accelerated Learning & Documentation Decoding

When I want to explore a new topic, tool, or framework, AI is my first port of call. Traditional documentation is often written in a dense, academic, or overly technical language that makes finding a starting point difficult.

- **Foundation Building:** I use AI to strip away the jargon and give me a simplified, plain-English conceptual foundation first.
- **Active Dialogue:** Unlike static documentation, I can treat the AI as a conversational partner. If there’s a gap in my understanding, I can ask for instant clarification, challenge its explanations, and ask follow-up questions until it clicks.

---

# The Code Playbook: Snippets Over Systems

Using AI for software development is incredibly powerful, but if you aren't careful, it will derail your codebase. My golden rule is simple: **ask for small snippets of code and wire them up yourself.**

When you ask AI to generate massive chunks of architecture, things fall apart for four reasons:

1.  **Context Bloat:** The code quickly becomes messy, bloated, and difficult to follow.
2.  **Poor Architecture:** AI tends to take the path of least resistance. It often dumps everything into massive, single classes rather than designing for long-term maintainability and clean separation of concerns.
3.  **The "Black Box" Problem:** If you copy-paste massive blocks of generated code, you don't truly _know_ your codebase. This makes it brutal to debug, impossible to confidently spot security weaknesses, and difficult to plan future enhancements.
4.  **Enforcing Guardrails:** Writing the connective tissue myself introduces mandatory human checkpoints. It forces me to review every line and maintain total ownership of the application.

# Outsourcing the Low-Level Friction

By handling the boilerplate, AI frees me up to think at a higher level. I can focus on application architecture, data flow, and user experience, while delegating the repetitive syntax to the model.

- **Structural Implementation:** I define the architecture, the class structures, and the required methods. I let the AI fill in the execution details.
- **Skipping the Boilerplate:** I already know how to write a `for` loop, map an array, or configure standard boilerplate. I don't need to waste my cognitive energy typing them out anymore.
- **Error Log Reviews:** When an app crashes or a pipeline fails, pasting the raw stack trace into AI usually surfaces the underlying issue or configuration typo in seconds, saving me from endless digging.

# Forced Git Hygiene

Ironically, coding with AI has drastically improved my Git habits. Because AI can occasionally hallucinate or take a codebase down a rabbit hole, I am incredibly disciplined with my version control now.

- **Isolation:** Every time I spin up a prompt to tackle a feature with AI, I create a fresh git branch first.
- **Micro-Commits:** The moment the AI helps me make a solid step of tangible progress, I commit it immediately.
- **Easy Rollbacks:** If the AI suggests a refactor that breaks the system, I don’t waste time trying to untangle it — I simply roll back to the last clean commit and try a different prompting angle.

# Idea Iteration & Scrutiny

I use AI as a sounding board to flesh out thoughts spinning around in my head. It’s an incredible tool for stress-testing concepts before committing actual time to them.

- **Angle Checking:** I will describe an idea or a workflow and ask the AI to play devil's advocate. I want it to find the blind spots, edge cases, and logistical flaws I might have missed.
- **Rapid Filtering:** It allows me to quickly iterate through variations of an idea to see if it’s genuinely viable. This prevents me from wasting days building something that was fundamentally flawed from the start.

# Automating the Laborious: Custom Skill Files

In my day job, I’ve taken automation a step further by writing custom "skill files" to handle repetitive, multi-step engineering tasks. These scripts are tightly scoped, highly curated, and execute predictable workflows such as:

- **Ticket Ingestion:** Reading, planning, and mapping out structural implementations for incoming tasks.
- **PR Management:** Automatically raising pull requests or running pre-compliance audits on existing PRs.

The trick to making these autonomous workflows successful is **narrow scoping**. Each skill runs through fixed, repeatable steps and is explicitly programmed to pause and ask for human intervention the second it encounters ambiguity. This eliminates guesswork and ensures consistently high-quality output.
