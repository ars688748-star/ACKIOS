import { ReleaseValidationService } from "./ReleaseValidationService.js";



export class ReleaseValidationFactory {



    public static create(){


        return new ReleaseValidationService();


    }


}
