import type { ReleaseFinalReport } from "./ReleaseFinalReport.js";

import { ReleaseFinalChecker } from "./ReleaseFinalChecker.js";

import { ReleaseSummaryGenerator } from "./ReleaseSummaryGenerator.js";



export class ReleaseFinalService {



    private readonly checker =

        new ReleaseFinalChecker();




    private readonly summary =

        new ReleaseSummaryGenerator();





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
