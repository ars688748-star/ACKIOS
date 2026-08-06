import type { ReleaseFinalReport } from "./ReleaseFinalReport.js";

import type { ReleaseFinalChecker } from "./ReleaseFinalChecker.js";
import type { ReleaseSummaryGenerator } from "./ReleaseSummaryGenerator.js";


export class ReleaseFinalService {



    public constructor(

        private readonly checker:

            ReleaseFinalChecker,


        private readonly summary:

            ReleaseSummaryGenerator

    ){}





    public finalize():

        ReleaseFinalReport {



        const checks =

            this.checker.check();





        return {



            version:

                "1.0.0",



            ready:

                Object.values(

                    checks

                ).every(

                    value => value === true

                ),



            checks:


                Object.keys(

                    checks

                ),



            createdAt:

                new Date()


        };


    }





    public summaryReport(){


        return this.summary.generate();


    }


}
