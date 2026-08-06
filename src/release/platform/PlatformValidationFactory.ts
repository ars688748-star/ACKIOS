import { PlatformValidationService } from "./PlatformValidationService.js";

import { CrossPlatformValidator } from "./CrossPlatformValidator.js";

import { PlatformDetector } from "./PlatformDetector.js";

import { OSValidator } from "./OSValidator.js";

import { RuntimeCompatibility } from "./RuntimeCompatibility.js";



export class PlatformValidationFactory {



    public static create(){


        return new PlatformValidationService(


            new CrossPlatformValidator(


                new PlatformDetector(),


                new OSValidator(),


                new RuntimeCompatibility()


            )


        );


    }


}
