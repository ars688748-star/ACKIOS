import { ReleasePreparationService } from "./ReleasePreparationService.js";
import { ReleasePreparationEngine } from "./ReleasePreparationEngine.js";
import { PublicPackageChecker } from "./PublicPackageChecker.js";


export class ReleasePreparationFactory {


    public static create(){


        return new ReleasePreparationService(

            new ReleasePreparationEngine(),

            new PublicPackageChecker()

        );


    }


}
