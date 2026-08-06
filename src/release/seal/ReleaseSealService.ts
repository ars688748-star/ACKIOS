import { ReleaseCandidate } from "./ReleaseCandidate.js";

import { SealVerification } from "./SealVerification.js";



export class ReleaseSealService {



    public constructor(


        private readonly candidateService:

            ReleaseCandidate,


        private readonly verification:

            SealVerification


    ){}





    public seal(){



        const candidate =

            this.candidateService

                .create();



        const verification =

            this.verification

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
