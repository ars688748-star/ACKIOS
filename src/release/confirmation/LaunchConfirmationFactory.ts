import { LaunchConfirmationService } from "./LaunchConfirmationService.js";
import { LaunchApproval } from "./LaunchApproval.js";
import { ReleaseAuthorization } from "./ReleaseAuthorization.js";
import { PublicationReady } from "./PublicationReady.js";


export class LaunchConfirmationFactory {



    public static create(){


        return new LaunchConfirmationService(


            new LaunchApproval(),


            new ReleaseAuthorization(),


            new PublicationReady()


        );


    }


}
