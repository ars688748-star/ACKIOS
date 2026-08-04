import { ReleasePreparationService } from "./ReleasePreparationService.js";



export class ReleasePreparationFactory {



    public static create(){


        return new ReleasePreparationService();


    }


}
