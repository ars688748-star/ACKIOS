import { PublicationEngine } from "../core/PublicationEngine.js";

import { PublishValidatorService } from "./PublishValidatorService.js";

import type { PublishResult } from "./PublishResult.js";



export class PublishWorkflow {



    private readonly validator =

        new PublishValidatorService();





    public constructor(

        private readonly engine:

            PublicationEngine

    ){}





    public async execute(

        request:

            {

                platform:string;

                artifact:string;

                credentials:unknown[];

            }

    ):

        Promise<PublishResult> {




        const validation =

            this.validator.validate(

                request.platform,

                request.credentials

            );





        if(

            !validation.valid

        ){


            return {


                success:false,


                platform:

                    request.platform,


                message:

                    validation.errors.join(

                        ", "

                    )


            };


        }






        const result =

            await this.engine.publish(

                request

            );






        return {


            success:true,


            platform:

                request.platform,


            message:

                "Publication completed",


            data:

                result



        };



    }



}
