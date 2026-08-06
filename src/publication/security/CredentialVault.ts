import type { PublicationCredential } from "../config/PublicationCredential.js";

import type { CredentialStore } from "./CredentialStore.js";


export class CredentialVault {


    public constructor(

        private readonly store:

            CredentialStore

    ){}




    public async save(

        platform:

            string,

        credentials:

            PublicationCredential[]

    ){


        await this.store.save(

            platform,

            credentials

        );


    }





    public async get(

        platform:

            string

    ){


        return this.store.load(

            platform

        );


    }


}
