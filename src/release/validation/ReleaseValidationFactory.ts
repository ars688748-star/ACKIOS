import { ReleaseValidationService } from "./ReleaseValidationService.js";
import { ReleaseValidationEngine } from "./ReleaseValidationEngine.js";
import { BuildValidator } from "./BuildValidator.js";
import { TestValidator } from "./TestValidator.js";
import { RuntimeValidator } from "./RuntimeValidator.js";


export class ReleaseValidationFactory {


    public static create(){


        return new ReleaseValidationService(

            new ReleaseValidationEngine(),

            new BuildValidator(),

            new TestValidator(),

            new RuntimeValidator()

        );


    }


}
