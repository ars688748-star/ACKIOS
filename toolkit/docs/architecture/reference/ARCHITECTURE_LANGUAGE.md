# ACKI Architecture Language (AAL)

Version: 1.0

Status: Draft

---

# Purpose

ACKI Architecture Language (AAL) defines the architectural vocabulary of ACKI OS.

Every architectural component SHALL conform to one of the definitions described in this document.

This document defines concepts rather than implementations.

---

# Architectural Types

The following architectural types are currently recognized:

- Kernel
- Runtime
- Pipeline
- Stage
- Manager
- Engine
- Builder
- Bridge
- Registry
- Service
- Context
- Module
- Factory

---

# Evolution

New architectural types MAY be introduced.

Existing architectural types MUST remain backward compatible whenever possible.

---

# Compliance

Every new architectural component SHALL be classified using one of the architectural types defined by AAL.

If no suitable architectural type exists, the architecture SHALL be extended before implementation begins.
