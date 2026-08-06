import { ReleasePreparationEngine } from "./ReleasePreparationEngine.js";
import { PublicPackageChecker } from "./PublicPackageChecker.js";


export class ReleasePreparationService {


    public constructor(

        private readonly engine: ReleasePreparationEngine,

        private readonly checker: PublicPackageChecker

    ){}



    public prepare(){


        return {


            manifest:

                this.engine.prepare(),


            package:

                this.checker.check()


        };


    }


}
