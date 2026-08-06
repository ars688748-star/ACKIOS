import type { PublicationRequest } from "./PublicationRequest.js";

import { PublicationPlatformRegistry } from "./PublicationPlatformRegistry.js";



export class PublicationEngine {



    public constructor(

        private readonly registry:

            PublicationPlatformRegistry

    ){}





    public async publish(

        request:

            PublicationRequest

    ){


        const platform =

            this.registry.get(

                request.platform

            );



        if(!platform){


            throw new Error(

                "Publication platform not found: " +

                request.platform

            );


        }



        const connected =

            await platform.connect(

                request.credentials

            );



        if(!connected){


            throw new Error(

                "Publication authentication failed: " +

                request.platform

            );


        }



        return platform.publish(

            request

        );


    }





    public platforms(){


        return this.registry.list();


    }


}
