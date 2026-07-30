import type { RuntimeConfig } from "./RuntimeConfig.js";

import { RuntimeConfigLoader } from "./RuntimeConfigLoader.js";



export class RuntimeConfigService {



    private readonly loader =

        new RuntimeConfigLoader();




    private config?:

        RuntimeConfig;





    public initialize():

        void {


        this.config =

            this.loader.load();


    }





    public get():

        RuntimeConfig {


        if (!this.config) {


            this.initialize();


        }



        return this.config!;


    }


}
