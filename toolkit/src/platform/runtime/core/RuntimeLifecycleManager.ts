import type { RuntimeModule } from "./RuntimeModule.js";



export class RuntimeLifecycleManager {



    private readonly modules:

        RuntimeModule[] = [];





    public register(

        module: RuntimeModule

    ): void {


        this.modules.push(

            module

        );


    }





    public startAll():

        void {


        for (const module of this.modules) {


            module.start();


        }


    }





    public stopAll():

        void {


        for (const module of this.modules) {


            module.stop();


        }


    }


}
