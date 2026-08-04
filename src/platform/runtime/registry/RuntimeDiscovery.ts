import type { RuntimeModule } from "../core/RuntimeModule.js";



export class RuntimeDiscovery {



    public discover(

        modules: RuntimeModule[]

    ):


        RuntimeModule[] {



        return modules.filter(

            module =>

                module !== undefined

        );


    }


}
