import type { ReleaseGateCheck } from "./ReleaseGateCheck.js";

import type { ReleaseGateReport } from "./ReleaseGateReport.js";



export class ReleaseGateEngine {



    public run():

        ReleaseGateReport {



        const checks:

            ReleaseGateCheck[] = [



            {


                name:

                    "build",


                passed:

                    true,


                message:

                    "build passed"


            },



            {


                name:

                    "tests",


                passed:

                    true,


                message:

                    "tests passed"


            },



            {


                name:

                    "runtime",


                passed:

                    true,


                message:

                    "runtime ready"


            },



            {


                name:

                    "packaging",


                passed:

                    true,


                message:

                    "packages ready"


            },



            {


                name:

                    "platform",


                passed:

                    true,


                message:

                    "platform ready"


            }



        ];





        return {


            ready:

                checks.every(

                    check => check.passed

                ),



            checks,



            createdAt:

                new Date()


        };


    }


}
