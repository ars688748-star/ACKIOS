import { PublicationPluginRegistry } from "./PublicationPluginRegistry.js";


export class PublicationPluginFactory {


    public static create(){


        return new PublicationPluginRegistry();


    }


}
