import type { RuntimeConfig } from "./RuntimeConfig.js";



export class DefaultRuntimeConfig {



    public static create():

        RuntimeConfig {


        return {


            brain:

                true,


            universe:

                true,


            workflow:

                true,


            dashboard:

                false,


            environment:

                "development"


        };


    }


}
