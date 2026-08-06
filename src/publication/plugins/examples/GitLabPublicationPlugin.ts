import type { PublicationPlugin } from "../PublicationPlugin.js";

import type { PublicationPlatform } from "../../core/PublicationPlatform.js";



export class GitLabPublicationPlugin implements PublicationPlugin {


    public readonly id =

        "gitlab";



    public readonly name =

        "GitLab";



    public readonly platform:

        PublicationPlatform = {



            id:

                "gitlab",



            name:

                "GitLab",



            async connect(

                config:

                    unknown

            ):

                Promise<boolean> {


                return true;


            },



            async publish(

                request:

                    unknown

            ) {


                return {


                    success:true,


                    platform:"gitlab",


                    request


                };


            }


        };





    public async activate():

        Promise<void> {


        return;


    }


}
