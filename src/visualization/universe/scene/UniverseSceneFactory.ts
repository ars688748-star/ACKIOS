import { UniverseSceneRuntime } from "./UniverseSceneRuntime.js";

import { UniverseControllerFactory } from "../controller/UniverseControllerFactory.js";



export class UniverseSceneFactory {



    public static create():

        UniverseSceneRuntime {



        return new UniverseSceneRuntime(

            UniverseControllerFactory.create()

        );


    }


}
