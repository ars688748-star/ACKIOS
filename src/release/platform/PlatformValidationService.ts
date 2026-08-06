import { CrossPlatformValidator } from "./CrossPlatformValidator.js";



export class PlatformValidationService {



    public constructor(


        private readonly validator:

            CrossPlatformValidator


    ){}





    public validate(){


        return this.validator.validate();


    }


}
