import type { LaunchReport } from "./LaunchReport.js";

import type { PublicReleaseInfo } from "./PublicReleaseInfo.js";

import { LaunchValidator } from "./LaunchValidator.js";



export class PublicLaunchService {



    private readonly validator =

        new LaunchValidator();





    public launch(){



        const release:

            PublicReleaseInfo = {



                name:

                    "ACKIOS",



                version:

                    "1.0.0",



                download:

                    "github-release"


            };





        const status =

            this.validator.validate(

                release.version

            );





        const report:

            LaunchReport = {



                version:

                    release.version,



                status,



                message:

                    "ACKIOS public release ready"


            };





        return {



            release,



            report,



            published:

                status === "verified"


        };


    }


}
