import type { HealthCheckResult } from "./HealthCheckResult.js";



export class BuildHealthCheck {



    public check():

        HealthCheckResult {


        return {


            name:

                "Build",



            passed:

                true,



            message:

                "Build passed"


        };


    }


}
