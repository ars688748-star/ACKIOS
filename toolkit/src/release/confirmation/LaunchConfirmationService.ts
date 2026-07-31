import { LaunchApproval } from "./LaunchApproval.js";

import { ReleaseAuthorization } from "./ReleaseAuthorization.js";

import { PublicationReady } from "./PublicationReady.js";



export class LaunchConfirmationService {



    public confirm(){



        const approval =

            new LaunchApproval()

                .approve();



        const authorization =

            new ReleaseAuthorization()

                .authorize();



        const publication =

            new PublicationReady()

                .check();





        return {



            approval,



            authorization,



            publication,



            ready:


                approval.approved &&

                authorization.authorized &&

                publication.ready



        };


    }


}
