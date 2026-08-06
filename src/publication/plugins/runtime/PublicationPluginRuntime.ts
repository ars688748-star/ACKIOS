import { PublicationPluginRegistry } from "../PublicationPluginRegistry.js";

import { PublicationPluginLoader } from "../PublicationPluginLoader.js";

import { GitLabPublicationPlugin } from "../examples/GitLabPublicationPlugin.js";

import { PublicationPluginScanner } from "../scanner/PublicationPluginScanner.js";
import { ExternalPublicationPluginLoader } from "../loader/ExternalPublicationPluginLoader.js";




export class PublicationPluginRuntime {


    private readonly externalLoader =

        new ExternalPublicationPluginLoader();



    public constructor(

        private readonly registry:

            PublicationPluginRegistry

    ){}






    public loadBuiltInPlugins():

        void {


        this.registry.register(

            new GitLabPublicationPlugin()

        );


    }

    public async initialize():

        Promise<void> {



        const loader =

            new PublicationPluginLoader(

                this.registry

            );






    }






    public async scanExternalPlugins(

        root:

            string

    ): Promise<void> {


        const scanner =

            new PublicationPluginScanner();



        const manifests =

            await scanner.scan(

                root

            );


        console.log(

            "External plugins found:",

            manifests.length

        );


        for(const manifest of manifests){


            const plugin =

                await this.externalLoader.load(

                    manifest

                );


            if(plugin){


                this.registry.register(

                    plugin

                );


            }


        }


    }


    public plugins(){


        return this.registry.list();


    }



}












