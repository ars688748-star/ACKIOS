export type DiagnosticStatus =

    | "healthy"

    | "warning"

    | "error";



export interface RuntimeDiagnostic {



    readonly name:

        string;



    readonly status:

        DiagnosticStatus;



    readonly message:

        string;


}
