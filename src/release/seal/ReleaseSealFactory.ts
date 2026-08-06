import { ReleaseSealService } from "./ReleaseSealService.js";

import { ReleaseCandidate } from "./ReleaseCandidate.js";

import { SealVerification } from "./SealVerification.js";



export class ReleaseSealFactory {



    public static create(){


        return new ReleaseSealService(


            new ReleaseCandidate(),


            new SealVerification()


        );



    }


}
