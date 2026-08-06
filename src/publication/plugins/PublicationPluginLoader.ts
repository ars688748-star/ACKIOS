import type { PublicationPlugin } from "./PublicationPlugin.js";

import { PublicationPluginRegistry } from "./PublicationPluginRegistry.js";


export class PublicationPluginLoader {


    public constructor(

        private readonly registry:

            PublicationPluginRegistry

    ){}





    public async load(

        plugin:

            PublicationPlugin

    ): Promise<void> {



        await plugin.activate();



        this.registry.register(

            plugin

        );


    }



}
