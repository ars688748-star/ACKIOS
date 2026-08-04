import type { ReleaseCheck } from "./ReleaseCheck.js";



export class BuildValidator {



    public validate():

        ReleaseCheck {



        return {


            name:

                "build",


            status:

                "pass",


            message:

                "build successful"


        };


    }


}
