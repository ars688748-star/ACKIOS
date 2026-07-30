import type { RuntimeDiagnostic } from "./RuntimeDiagnostic.js";



export interface RuntimeHealthReport {



    readonly status:

        "healthy"

        | "warning"

        | "error";



    readonly diagnostics:

        RuntimeDiagnostic[];



    readonly createdAt:

        Date;


}
