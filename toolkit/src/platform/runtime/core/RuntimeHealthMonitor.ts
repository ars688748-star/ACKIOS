import type { RuntimeModule } from "./RuntimeModule.js";



export class RuntimeHealthMonitor {



    public check(

        modules: RuntimeModule[]

    ){


        return modules.map(

            module => ({


                name:

                    module.name,


                status:

                    module.health()


            })

        );


    }


}
