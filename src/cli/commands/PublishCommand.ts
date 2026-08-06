import { Command } from "../core/Command.js";
import { CommandContext } from "../models/CommandContext.js";

import { PublishWorkflow } from "../../publication/workflow/PublishWorkflow.js";
import { PublicationWizard } from "../../publication/session/PublicationWizard.js";


export class PublishCommand implements Command {


    public readonly name = "publish";



    public async execute(

        context:

            CommandContext

    ): Promise<number> {



        console.log("");

        console.log("ACKIOS Publish");

        console.log("================");





        const wizard =

            context.application.kernel.getService<PublicationWizard>(
                "publicationWizard"
            );

        const platforms =
            wizard.platforms();

        console.log("");
        console.log("Available platforms:");

        platforms.forEach(
            platform =>
                console.log("- " + platform.id)
        );

        const workflow =

            context.application.kernel.getService<PublishWorkflow>(

                "publishWorkflow"

            );





        const result =

            await workflow.execute({



                platform:

                    platforms[0].id,



                artifact:

                    "ACKIOS-release",



                credentials:

                    [



                        {

                            type:

                                "token",



                            value:

                                true



                        }



                    ]



            });






        console.log("");

        console.log(

            JSON.stringify(

                result,

                null,

                2

            )

        );





        if(

            result.success

        ){



            console.log("");

            console.log(

                "[ OK ] Publication completed."

            );



            return 0;



        }





        console.log("");

        console.log(

            "[ FAILED ] Publication failed."

        );



        return 1;



    }


}


