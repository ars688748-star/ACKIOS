import { PublishExplorerService } from "./PublishExplorerService.js";

import { PublicationWizard } from "../session/PublicationWizard.js";

import { PublishWorkflow } from "../workflow/PublishWorkflow.js";



export class PublishExplorerFactory {



    public static create(

        wizard:

            PublicationWizard,


        workflow:

            PublishWorkflow

    ){



        return new PublishExplorerService(

            wizard,

            workflow

        );


    }



}
