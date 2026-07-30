import type { RuntimeModule } from "../core/RuntimeModule.js";


import { BrainRuntimeModule } from "./BrainRuntimeModule.js";

import { UniverseRuntimeModule } from "./UniverseRuntimeModule.js";

import { WorkflowRuntimeModule } from "./WorkflowRuntimeModule.js";



export class AckiosRuntimeComposition {



    public createModules():

        RuntimeModule[] {



        return [


            new BrainRuntimeModule(),


            new UniverseRuntimeModule(),


            new WorkflowRuntimeModule()


        ];


    }


}
