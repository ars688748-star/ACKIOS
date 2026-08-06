import { PublicationWizard } from "../session/PublicationWizard.js";

import { PublishWorkflow } from "../workflow/PublishWorkflow.js";

import type { PublishViewModel } from "./PublishViewModel.js";

import type { PublishResult } from "../workflow/PublishResult.js";



export class PublishExplorerService {



    public constructor(

        private readonly wizard:

            PublicationWizard,


        private readonly workflow:

            PublishWorkflow

    ){}





    public getViewModel():

        PublishViewModel {



        return {


            platforms:

                this.wizard.platforms()

                    .map(

                        platform => ({


                            id:

                                platform.id,



                            name:

                                platform.name,



                            fields:

                                this.wizard.fields(

                                    platform.id

                                )


                        })

                    )


        };


    }





    public async publish(

        request:

            {

                platform:string;

                artifact:string;

                credentials:unknown[];

            }

    ):

        Promise<PublishResult> {



        return this.workflow.execute(

            request

        );


    }



}
