import { VersionLock } from "./VersionLock.js";
import { ApiFreeze } from "./ApiFreeze.js";
import { ReleaseBranchCheck } from "./ReleaseBranchCheck.js";
import { FinalTagPreparation } from "./FinalTagPreparation.js";


export class ReleaseFreezeService {



    public constructor(

        private readonly version:

            VersionLock,


        private readonly api:

            ApiFreeze,


        private readonly branch:

            ReleaseBranchCheck,


        private readonly tag:

            FinalTagPreparation

    ){}




    public freeze(){



        const version =

            this.version.lock();



        const api =

            this.api.freeze();



        const branch =

            this.branch.check();



        const tag =

            this.tag.prepare();





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
