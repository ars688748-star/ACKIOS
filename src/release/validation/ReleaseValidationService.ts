import { BuildValidator } from "./BuildValidator.js";

import { TestValidator } from "./TestValidator.js";

import { RuntimeValidator } from "./RuntimeValidator.js";

import { ReleaseValidationEngine } from "./ReleaseValidationEngine.js";



export class ReleaseValidationService {



    private readonly engine =

        new ReleaseValidationEngine();





    public validate(){



        return this.engine.evaluate([


            new BuildValidator().validate(),


            new TestValidator().validate(),


            new RuntimeValidator().validate()


        ]);


    }


}
