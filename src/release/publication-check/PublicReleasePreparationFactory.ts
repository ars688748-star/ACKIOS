import { PublicReleasePreparationService } from "./PublicReleasePreparationService.js";



export class PublicReleasePreparationFactory {



    public static create(){


        return new PublicReleasePreparationService();



    }


}
