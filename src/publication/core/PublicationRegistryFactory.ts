import { PublicationPlatformRegistry } from "./PublicationPlatformRegistry.js";

import { GitHubPublicationProvider } from "../providers/github/GitHubPublicationProvider.js";

import { CustomPublicationProvider } from "../providers/custom/CustomPublicationProvider.js";

import type { PublicationPluginRegistry } from "../plugins/PublicationPluginRegistry.js";

import { PublicationPluginAdapter } from "../plugins/PublicationPluginAdapter.js";



export class PublicationRegistryFactory {



    public static create(

        pluginRegistry?:

            PublicationPluginRegistry

    ){



        const registry =

            new PublicationPlatformRegistry();





        registry.register(

            new GitHubPublicationProvider()

        );





        registry.register(

            new CustomPublicationProvider()

        );





        if(pluginRegistry){



            for(const plugin of pluginRegistry.list()){


                registry.register(

                    PublicationPluginAdapter.adapt(

                        plugin

                    )

                );


            }


        }





        return registry;


    }


}
