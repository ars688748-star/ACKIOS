import type { RuntimeConfig } from "./RuntimeConfig.js";

import { DefaultRuntimeConfig } from "./DefaultRuntimeConfig.js";



export class RuntimeConfigLoader {



    public load():

        RuntimeConfig {


        return DefaultRuntimeConfig.create();


    }


}
