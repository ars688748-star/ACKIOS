import { ReleaseCandidate } from "./ReleaseCandidate.js";

import { SealVerification } from "./SealVerification.js";



export class ReleaseSealService {



    public seal(){



        const candidate =

            new ReleaseCandidate()

                .create();



        const verification =

            new SealVerification()

                .verify();





        return {



            candidate,



            verification,



            sealed:


                candidate.approved &&

                verification.valid



        };


    }


}
