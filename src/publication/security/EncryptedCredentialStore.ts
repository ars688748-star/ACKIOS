import type { PublicationCredential } from "../config/PublicationCredential.js";

import type { CredentialStore } from "./CredentialStore.js";

import { FileCredentialStore } from "./storage/FileCredentialStore.js";


export class EncryptedCredentialStore implements CredentialStore {


    private readonly store =

        new FileCredentialStore();




    public save(

        platform:

            string,

        credentials:

            PublicationCredential[]

    ){

        return this.store.save(

            platform,

            credentials

        );


    }





    public load(

        platform:

            string

    ){

        return this.store.load(

            platform

        );


    }


}
