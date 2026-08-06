import { PublicLaunchService } from "./PublicLaunchService.js";

import { LaunchValidator } from "./LaunchValidator.js";



export class PublicLaunchFactory {



    public static create(){


        return new PublicLaunchService(


            new LaunchValidator()


        );


    }


}
