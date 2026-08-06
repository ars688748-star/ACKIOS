import { ReleaseFreezeService } from "./ReleaseFreezeService.js";

import { VersionLock } from "./VersionLock.js";
import { ApiFreeze } from "./ApiFreeze.js";
import { ReleaseBranchCheck } from "./ReleaseBranchCheck.js";
import { FinalTagPreparation } from "./FinalTagPreparation.js";


export class ReleaseFreezeFactory {



    public static create(){


        return new ReleaseFreezeService(


            new VersionLock(),


            new ApiFreeze(),


            new ReleaseBranchCheck(),


            new FinalTagPreparation()


        );


    }


}
