# AAL Type: Manager

Version: 1.0

Status: Draft

---

# Purpose

A Manager owns a single domain of responsibility within ACKI OS.

A Manager coordinates domain operations but does not orchestrate system execution.

---

# Contract

A Manager MUST:

- own exactly one domain;
- expose the public API of its domain;
- preserve domain consistency;
- delegate specialized processing to supporting components when appropriate.

A Manager MUST NOT:

- control Runtime execution;
- control Pipeline execution;
- own responsibilities of another Manager;
- contain presentation or infrastructure concerns.

---

# Responsibilities

A Manager is responsible for:

- domain coordination;
- domain state management;
- domain validation;
- interaction with supporting Engines and Stores.

---

# Dependencies

A Manager MAY depend on:

- Engines
- Stores
- Domain Models
- Contracts

A Manager MUST NOT depend on:

- Runtime
- Pipeline
- Stages
- other Managers unless explicitly defined by architecture

---

# Lifecycle

Initialize
      │
      ▼
Serve Requests
      │
      ▼
Dispose

---

# Extension Rules

New Managers SHALL own exactly one domain.

Domain boundaries MUST remain explicit.

---

# Compliance Checklist

A Manager:

☐ Owns one domain

☐ Exposes domain operations

☐ Does not orchestrate Runtime

☐ Does not control Pipeline

☐ Delegates specialized processing

☐ Is independently testable
