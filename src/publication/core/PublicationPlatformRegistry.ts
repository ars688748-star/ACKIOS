import type { PublicationPlatform } from "./PublicationPlatform.js";



export class PublicationPlatformRegistry {



    private readonly platforms:

        Map<string, PublicationPlatform>;



    public constructor(){


        this.platforms =

            new Map();


    }





    public register(

        platform:

            PublicationPlatform

    ){


        this.platforms.set(

            platform.id,

            platform

        );


    }





    public get(

        id:

            string

    ):


        PublicationPlatform | undefined {


        return this.platforms.get(

            id

        );


    }





    public list(){


        return Array.from(

            this.platforms.values()

        );


    }


}
