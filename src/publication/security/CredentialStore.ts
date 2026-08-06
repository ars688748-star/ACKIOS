import type { PublicationCredential } from "../config/PublicationCredential.js";


export interface CredentialStore {


    save(

        platform:

            string,

        credentials:

            PublicationCredential[]

    ):

        Promise<void>;



    load(

        platform:

            string

    ):

        Promise<PublicationCredential[]>;



}
