import { PublishWorkflow } from "./PublishWorkflow.js";

import { PublicationEngine } from "../core/PublicationEngine.js";


export class PublishWorkflowFactory {


    public static create(

        engine:

            PublicationEngine

    ){


        return new PublishWorkflow(

            engine

        );


    }


}
