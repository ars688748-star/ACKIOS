# Migration Plan

Last Updated:
2026-07-12

==================================================
Goal
==================================================

Separate ACKIOS into:

- ACKIOS Toolkit (Public)
- ACKIOS Contracts (Public)
- ACKIOS Core (Private)

without breaking compatibility.

==================================================
Phase 1
==================================================

✔ Architecture Boundary

Completed

==================================================
Phase 2
==================================================

✔ Dependency Audit

Completed

==================================================
Phase 3
==================================================

Migration Planning

Current Phase

==================================================
Phase 4
==================================================

Extract Shared Contracts

- Public interfaces
- DTOs
- Events
- Runtime contracts

==================================================
Phase 5
==================================================

Create Private Repository

ackios-core

Move:

src/brain

==================================================
Phase 6
==================================================

Toolkit Integration

Replace direct implementation
dependencies with public contracts.

==================================================
Phase 7
==================================================

Validation

Run:

- Architecture Scanner
- Compliance Scanner
- Full Test Suite

==================================================
Expected Result
==================================================

Public:

ACKIOS Toolkit

Private:

ACKIOS Core

Shared:

ACKIOS Contracts

Status:

Planned
