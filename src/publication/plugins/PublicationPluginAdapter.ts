import type { PublicationPlatform } from "../core/PublicationPlatform.js";
import type { PublicationPlugin } from "./PublicationPlugin.js";


export class PublicationPluginAdapter {


    public static adapt(

        plugin:

            PublicationPlugin

    ): PublicationPlatform {


        return plugin.platform;


    }


}
