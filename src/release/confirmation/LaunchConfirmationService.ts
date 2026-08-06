import { LaunchApproval } from "./LaunchApproval.js";
import { ReleaseAuthorization } from "./ReleaseAuthorization.js";
import { PublicationReady } from "./PublicationReady.js";


export class LaunchConfirmationService {


    public constructor(

        private readonly approval:

            LaunchApproval,


        private readonly authorization:

            ReleaseAuthorization,


        private readonly publication:

            PublicationReady

    ){}




    public confirm(){



        const approval =

            this.approval.approve();



        const authorization =

            this.authorization.authorize();



        const publication =

            this.publication.check();





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
