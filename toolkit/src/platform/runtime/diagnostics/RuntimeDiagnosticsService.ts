import type { RuntimeDiagnostic } from "./RuntimeDiagnostic.js";

import { RuntimeDiagnosticsEngine } from "./RuntimeDiagnosticsEngine.js";



export class RuntimeDiagnosticsService {



    private readonly engine =

        new RuntimeDiagnosticsEngine();





    public check(

        diagnostics:

            RuntimeDiagnostic[]

    ){


        return this.engine.analyze(

            diagnostics

        );


    }


}
