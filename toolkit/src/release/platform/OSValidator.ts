import type { PlatformType } from "./PlatformDetector.js";



export class OSValidator {



    public validate(

        platform:

            PlatformType

    ){


        return {


            platform,


            supported:

                true,


            message:

                "platform supported"


        };


    }


}
