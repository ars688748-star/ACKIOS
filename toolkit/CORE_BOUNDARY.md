# ACKIOS Core Boundary

## Purpose

ACKIOS is divided into two repositories:

- ACKIOS Toolkit (public)
- ACKIOS Core (private)

The Toolkit provides engineering capabilities.

The Core contains the complete cognitive architecture and proprietary intelligence.

---

# Public Toolkit

The following modules belong to the public engineering platform:

- architecture
- scanner
- engine
- report
- workspace
- plugins
- cli
- commands
- config
- infrastructure
- recommendations
- services
- bin

---

# Private Core

The following modules belong to ACKIOS Core:

- brain
  - cognition
  - runtime
  - memory
  - knowledge
  - reasoning
  - planning
  - decision
  - execution
  - learning
  - reflection
  - prediction
  - attention
  - perception
  - goal-system
  - working-memory
  - world-model
  - blackboard
  - scheduler
  - kernel

---

# Shared Contracts

The following APIs may be shared between Toolkit and Core:

- brain/contracts
- brain/api
- brain/interfaces
- workspace/contracts
- scanner/contracts
- report/contracts
- engine/contracts

---

# Dependency Rules

Toolkit MUST NOT depend on internal Core implementations.

Toolkit communicates with Core only through public contracts.

Core may use Toolkit abstractions but must remain independently deployable.

---

# Sprint 99

Phase 1:

- Architecture audit
- Boundary definition

No code movement.

No refactoring.

Architecture first.
