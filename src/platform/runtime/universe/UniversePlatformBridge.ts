import type { UniverseRuntimeService } from "./UniverseRuntimeService.js";



export class UniversePlatformBridge {



    public constructor(

        private readonly universe:

            UniverseRuntimeService

    ) {}





    public initialize():

        void {


        this.universe.start();


    }





    public shutdown():

        void {


        this.universe.stop();


    }





    public health():

        string {


        return this.universe.getStatus();


    }


}
