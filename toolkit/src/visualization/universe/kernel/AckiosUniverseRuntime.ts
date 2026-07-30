import { UniverseKernelFactory } from "./UniverseKernelFactory.js";



export class AckiosUniverseRuntime {



    private readonly kernel =

        UniverseKernelFactory.create();





    public update(

        universe: any

    ) {


        return this.kernel.update(

            universe

        );


    }



}
