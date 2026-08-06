import type { PublicationPlatform } from "../../core/PublicationPlatform.js";
import type { PublicationRequest } from "../../core/PublicationRequest.js";


export class GitHubPublicationProvider implements PublicationPlatform {



    public readonly id =

        "github";



    public readonly name =

        "GitHub";





    public async connect(

        config:

            unknown

    ):

        Promise<boolean> {


        return Boolean(

            config

        );


    }





    public async publish(

        request:

            PublicationRequest

    ){


        return {


            platform:

                this.id,



            status:

                "published",



            artifact:

                request.artifact



        };


    }


}
