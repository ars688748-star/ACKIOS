import { PlatformDetector } from "./PlatformDetector.js";

import { OSValidator } from "./OSValidator.js";

import { RuntimeCompatibility } from "./RuntimeCompatibility.js";

import type { PlatformReport } from "./PlatformReport.js";



export class CrossPlatformValidator {



    private readonly detector =

        new PlatformDetector();




    private readonly osValidator =

        new OSValidator();




    private readonly runtime =

        new RuntimeCompatibility();





    public validate():

        PlatformReport {



        const platform =

            this.detector.detect();



        const os =

            this.osValidator.validate(

                platform

            );



        const runtime =

            this.runtime.check();




        return {


            ready:

                os.supported &&

                runtime.compatible,



            platform,



            message:

                "cross platform validation passed",



            createdAt:

                new Date()


        };


    }


}
