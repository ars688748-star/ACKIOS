import { PlatformValidationService } from "./PlatformValidationService.js";



export class PlatformValidationFactory {



    public static create(){


        return new PlatformValidationService();


    }


}
