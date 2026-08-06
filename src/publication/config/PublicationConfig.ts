import type { PublicationCredential } from "./PublicationCredential.js";


export interface PublicationConfig {


    platform:

        string;



    repository?:

        string;



    url?:

        string;



    credentials:

        PublicationCredential[];



}
