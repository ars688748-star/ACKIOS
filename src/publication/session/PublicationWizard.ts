import type { PublicationEngine } from "../core/PublicationEngine.js";

import { PublicationSelector } from "./PublicationSelector.js";

import type { PublicationWizardSession } from "./PublicationWizardSession.js";

import { CredentialVault } from "../security/CredentialVault.js";

import { PublicationSchemaRegistry } from "../config/registry/PublicationSchemaRegistry.js";



export class PublicationWizard {



    public constructor(


        private readonly selector:

            PublicationSelector,


        private readonly engine:

            PublicationEngine,


        private readonly vault:

            CredentialVault,


        private readonly schemas:

            PublicationSchemaRegistry


    ){}




    public platforms(){


        return this.selector.list();


    }





    public schema(

        platform:

            string

    ){


        return this.schemas.get(

            platform

        );


    }





    public fields(

        platform:

            string

    ){


        const schema =

            this.schema(

                platform

            );



        return schema?.fields ?? [];


    }





    public async saveCredentials(


        platform:

            string,


        credentials:

            any[]


    ){


        await this.vault.save(

            platform,

            credentials

        );


    }





    public async loadCredentials(


        platform:

            string


    ){


        return this.vault.get(

            platform

        );


    }





    public async publish(


        session:

            PublicationWizardSession


    ){


        let credentials =

            session.config.credentials;




        if(

            credentials.length === 0

        ){


            credentials =

                await this.loadCredentials(

                    session.config.platform

                );


        }





        return this.engine.publish({



            platform:

                session.config.platform,



            artifact:

                session.artifact,



            credentials



        });



    }


}
