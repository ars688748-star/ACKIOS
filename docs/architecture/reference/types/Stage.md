# AAL Type: Stage

Version: 1.0

Status: Draft

---

# Purpose

A Stage represents a single, ordered step of cognitive execution within a Pipeline.

A Stage SHALL perform exactly one architectural responsibility.

---

# Contract

A Stage MUST:

- receive an input context;
- produce an output context;
- preserve pipeline continuity;
- remain independently testable.

A Stage MUST NOT:

- own domain state;
- control pipeline execution;
- instantiate infrastructure services;
- perform responsibilities of another Stage.

---

# Responsibilities

A Stage is responsible for:

- transforming context;
- invoking the appropriate domain service when required;
- preparing context for the next Stage.

---

# Dependencies

A Stage MAY depend on:

- Context
- Service interfaces
- Contracts

A Stage SHOULD NOT depend directly on:

- other Stages
- Pipeline implementation
- Runtime implementation

---

# Side Effects

Side effects MUST be explicit.

Persistent changes SHOULD be delegated to Managers or Services.

---

# Lifecycle

Input Context
      │
      ▼
Stage Execution
      │
      ▼
Output Context

---

# Composition

Stages SHALL execute sequentially inside a Pipeline.

Stages MUST remain independent.

---

# Extension Rules

New Stages SHALL follow this contract.

Existing Stages SHOULD evolve without breaking the pipeline contract.

---

# Compliance Checklist

A Stage:

☐ Has one responsibility

☐ Receives Context

☐ Produces Context

☐ Does not own business state

☐ Is independently testable

☐ Can be reordered only through Pipeline configuration
