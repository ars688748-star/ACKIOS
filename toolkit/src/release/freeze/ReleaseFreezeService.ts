import { VersionLock } from "./VersionLock.js";

import { ApiFreeze } from "./ApiFreeze.js";

import { ReleaseBranchCheck } from "./ReleaseBranchCheck.js";

import { FinalTagPreparation } from "./FinalTagPreparation.js";



export class ReleaseFreezeService {



    public freeze(){



        const version =

            new VersionLock().lock();



        const api =

            new ApiFreeze().freeze();



        const branch =

            new ReleaseBranchCheck().check();



        const tag =

            new FinalTagPreparation().prepare();





        return {



            version,



            api,



            branch,



            tag,



            frozen:


                version.locked &&

                api.frozen &&

                branch.valid &&

                tag.ready



        };


    }


}
