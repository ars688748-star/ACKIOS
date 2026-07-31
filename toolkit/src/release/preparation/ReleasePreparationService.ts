import { ReleasePreparationEngine } from "./ReleasePreparationEngine.js";

import { PublicPackageChecker } from "./PublicPackageChecker.js";



export class ReleasePreparationService {



    private readonly engine =

        new ReleasePreparationEngine();




    private readonly checker =

        new PublicPackageChecker();





    public prepare(){


        return {


            manifest:

                this.engine.prepare(),


            package:

                this.checker.check()


        };


    }


}
