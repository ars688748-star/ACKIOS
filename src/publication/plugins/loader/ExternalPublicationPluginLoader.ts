import type { PublicationPlugin } from "../PublicationPlugin.js";
import type { PublicationPluginManifest } from "../manifest/PublicationPluginManifest.js";
import { pathToFileURL } from "url";


export class ExternalPublicationPluginLoader {



    public async load(

        manifest:

            PublicationPluginManifest

    ):

        Promise<PublicationPlugin | undefined> {


        if(!manifest.path){

            return undefined;

        }


        const module =

            await import(

                pathToFileURL(manifest.path).href

            );


        return (

            module.default ??

            module.plugin

        ) as PublicationPlugin;


    }



}


