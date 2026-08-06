import type { PublicationPlatform } from "../core/PublicationPlatform.js";


export interface PublicationPlugin {


    id:

        string;



    name:

        string;



    platform:

        PublicationPlatform;



    activate():

        Promise<void>;



}
