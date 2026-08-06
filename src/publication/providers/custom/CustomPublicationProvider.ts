import type { PublicationPlatform } from "../../core/PublicationPlatform.js";
import type { PublicationRequest } from "../../core/PublicationRequest.js";


export class CustomPublicationProvider implements PublicationPlatform {



    public readonly id =

        "custom";



    public readonly name =

        "Custom Platform";





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



            name:

                this.name,



            status:

                "published",



            artifact:

                request.artifact


        };


    }


}
