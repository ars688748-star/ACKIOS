import type { InstallerConfig } from "./InstallerConfig.js";

import { OSDetector } from "./OSDetector.js";

import { InstallerEngine } from "./InstallerEngine.js";



export class InstallerService {



    private readonly detector =

        new OSDetector();



    private readonly engine =

        new InstallerEngine();





    public prepare() {


        const platform =

            this.detector.detect();




        const steps =

            this.engine.run();




        const config:

            InstallerConfig = {


                version:

                    "1.0.0",



                target:

                    platform,



                installPath:

                    "./ACKIOS"


            };




        return {


            config,


            steps



        };


    }


}
