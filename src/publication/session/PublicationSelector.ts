import type { PublicationPlatform } from "../core/PublicationPlatform.js";
import type { PublicationPlatformRegistry } from "../core/PublicationPlatformRegistry.js";


export class PublicationSelector {


    public constructor(

        private readonly registry:

            PublicationPlatformRegistry

    ){}



    public list():

        PublicationPlatform[] {


        return this.registry.list();


    }




    public select(

        id:

            string

    ):

        PublicationPlatform | undefined {


        return this.registry.get(

            id

        );


    }


}
