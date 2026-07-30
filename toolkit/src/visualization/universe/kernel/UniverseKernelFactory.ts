import { UniverseRuntimeKernel } from "./UniverseRuntimeKernel.js";

import { UniverseSceneFactory } from "../scene/UniverseSceneFactory.js";



export class UniverseKernelFactory {



    public static create():

        UniverseRuntimeKernel {


        return new UniverseRuntimeKernel(

            UniverseSceneFactory.create()

        );


    }


}
