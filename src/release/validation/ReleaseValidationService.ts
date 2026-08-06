import { BuildValidator } from "./BuildValidator.js";
import { TestValidator } from "./TestValidator.js";
import { RuntimeValidator } from "./RuntimeValidator.js";
import { ReleaseValidationEngine } from "./ReleaseValidationEngine.js";


export class ReleaseValidationService {


    public constructor(

        private readonly engine: ReleaseValidationEngine,

        private readonly buildValidator: BuildValidator,

        private readonly testValidator: TestValidator,

        private readonly runtimeValidator: RuntimeValidator

    ){}



    public validate(){


        return this.engine.evaluate([


            this.buildValidator.validate(),


            this.testValidator.validate(),


            this.runtimeValidator.validate()


        ]);


    }


}
