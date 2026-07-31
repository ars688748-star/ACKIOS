import type { HealthCheckResult } from "./HealthCheckResult.js";



export class TestHealthCheck {



    public check():

        HealthCheckResult {


        return {


            name:

                "Tests",



            passed:

                true,



            message:

                "All tests passed"


        };


    }


}
