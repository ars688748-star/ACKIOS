import type { ReleaseCheck } from "./ReleaseCheck.js";

import type { ReleaseReport } from "./ReleaseReport.js";



export class ReleaseValidationEngine {



    public evaluate(

        checks:

            ReleaseCheck[]

    ):

        ReleaseReport {



        return {


            ready:

                checks.every(

                    check =>

                        check.status === "pass"

                ),


            checks,


            createdAt:

                new Date()


        };


    }


}
