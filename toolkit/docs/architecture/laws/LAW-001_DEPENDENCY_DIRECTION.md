# LAW-001 — Dependency Direction

Version: 1.0

Status: Draft

---

# Statement

Dependencies SHALL point only from higher architectural layers to lower architectural layers.

Lower architectural layers MUST NOT depend on higher architectural layers.

---

# Purpose

This law preserves architectural stability, prevents cyclic dependencies, and enables independent evolution of subsystems.

---

# Rules

1. BrainKernel MAY depend on infrastructure services.

2. Runtime MAY depend on contracts and services.

3. Pipeline MAY depend on Stage contracts.

4. Stage MAY depend on Context, Contracts, and Services.

5. Managers MAY depend on Engines and domain models.

6. Engines MUST NOT depend on Runtime, Pipeline, or Stages.

7. Lower layers MUST NEVER reference higher layers.

---

# Examples

Valid:

BrainRuntime
    ↓
BrainPipeline
    ↓
RuntimeStage
    ↓
Manager
    ↓
Engine

Invalid:

Engine
    ↓
Runtime

Manager
    ↓
Pipeline

Stage
    ↓
BrainRuntime

---

# Compliance

Every pull request introducing a new dependency SHALL be evaluated against this law.

Any violation MUST be documented through an ADR before implementation.

---

# Rationale

Stable dependency direction allows ACKI OS to evolve incrementally without creating architectural cycles or hidden coupling.
