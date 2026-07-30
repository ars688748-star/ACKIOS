import type { RuntimeDiagnostic } from "./RuntimeDiagnostic.js";

import type { RuntimeHealthReport } from "./RuntimeHealthReport.js";



export class RuntimeDiagnosticsEngine {



    public analyze(

        diagnostics:

            RuntimeDiagnostic[]

    ): RuntimeHealthReport {



        const hasError =

            diagnostics.some(

                item =>

                    item.status === "error"

            );



        const hasWarning =

            diagnostics.some(

                item =>

                    item.status === "warning"

            );





        return {


            status:

                hasError

                    ? "error"

                    : hasWarning

                        ? "warning"

                        : "healthy",



            diagnostics,



            createdAt:

                new Date()


        };


    }


}
