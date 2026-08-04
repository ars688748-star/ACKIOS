import { RuntimeDiagnosticsService } from "./RuntimeDiagnosticsService.js";



export class RuntimeDiagnosticsFactory {



    public static create(){


        return new RuntimeDiagnosticsService();


    }


}
