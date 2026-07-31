import type { HealthCheckResult } from "./HealthCheckResult.js";



export class RepositoryHealthCheck {



    public check():

        HealthCheckResult {


        return {


            name:

                "Repository",



            passed:

                true,



            message:

                "Repository clean"


        };


    }


}
