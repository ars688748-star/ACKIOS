import { CrossPlatformValidator } from "./CrossPlatformValidator.js";



export class PlatformValidationService {



    private readonly validator =

        new CrossPlatformValidator();





    public validate(){


        return this.validator.validate();


    }


}
