import type { LaunchStatus } from "./LaunchStatus.js";



export class LaunchValidator {



    public validate(

        version:

            string

    ):



        LaunchStatus {



        if (

            version === "1.0.0"

        ) {


            return "verified";


        }



        return "prepared";


    }


}
