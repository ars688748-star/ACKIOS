import { promises as fs } from "node:fs";


import type { PublicationCredential } from "../../config/PublicationCredential.js";

import type { CredentialStore } from "../CredentialStore.js";

import { CredentialEncryption } from "./CredentialEncryption.js";

import { CredentialStoragePath } from "./CredentialStoragePath.js";


export class FileCredentialStore implements CredentialStore {


    private readonly encryption =

        new CredentialEncryption();





    public async save(

        platform:

            string,

        credentials:

            PublicationCredential[]

    ):

        Promise<void> {



        const data = {


            platform,


            credentials:

                credentials.map(

                    (item: PublicationCredential) => ({


                        type:

                            item.type,



                        value:

                            this.encryption.encrypt(

                                String(

                                    item.value

                                )

                            )



                    })

                )



        };




        await fs.mkdir(

            ".ackios",

            {

                recursive:

                    true

            }

        );




        await fs.writeFile(

            CredentialStoragePath.file(),

            JSON.stringify(

                data,

                null,

                2

            )

        );


    }





    public async load(

        platform:

            string

    ):

        Promise<PublicationCredential[]> {



        try {


            const content =

                await fs.readFile(

                    CredentialStoragePath.file(),

                    "utf-8"

                );



            const data =

                JSON.parse(

                    content

                );




            if(

                data.platform !== platform

            ){

                return [];

            }




            return data.credentials.map(

                (item: {

                    type:string;

                    value:string;

                }) => ({



                    type:

                        item.type,



                    value:

                        this.encryption.decrypt(

                            item.value

                        )



                })

            );



        }

        catch{


            return [];


        }


    }


}
