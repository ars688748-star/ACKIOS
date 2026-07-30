import { RuntimeLifecycleManager } from "./RuntimeLifecycleManager.js";

import { RuntimeHealthMonitor } from "./RuntimeHealthMonitor.js";

import type { RuntimeModule } from "./RuntimeModule.js";



export class AckiosRuntimeOrchestrator {



    private readonly lifecycle =

        new RuntimeLifecycleManager();



    private readonly monitor =

        new RuntimeHealthMonitor();





    private readonly modules:

        RuntimeModule[] = [];





    public register(

        module: RuntimeModule

    ): void {



        this.modules.push(

            module

        );



        this.lifecycle.register(

            module

        );


    }





    public start():

        void {


        this.lifecycle.startAll();


    }





    public stop():

        void {


        this.lifecycle.stopAll();


    }





    public health(){


        return this.monitor.check(

            this.modules

        );


    }


}
