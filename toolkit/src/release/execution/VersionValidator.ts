import type { ReleaseExecutionStatus } from "./ReleaseExecutionStatus.js";



export class VersionValidator {



    public validate(

        version:

            string

    ):



        ReleaseExecutionStatus {



        if (

            version === "1.0.0"

        ) {


            return "validated";


        }



        return "prepared";


    }


}
