import type { PublicationPlugin } from "./PublicationPlugin.js";


export class PublicationPluginRegistry {


    private readonly plugins =

        new Map<string, PublicationPlugin>();




    public register(

        plugin:

            PublicationPlugin

    ): void {


        this.plugins.set(

            plugin.id,

            plugin

        );


    }





    public get(

        id:

            string

    ) {


        return this.plugins.get(

            id

        );


    }





    public list(){


        return Array.from(

            this.plugins.values()

        );


    }


}
