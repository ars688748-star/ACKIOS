import { PublicationSchemaRegistry } from "./PublicationSchemaRegistry.js";

import { GitHubConfigSchema } from "../../providers/github/config/GitHubConfigSchema.js";

import { CustomConfigSchema } from "../../providers/custom/config/CustomConfigSchema.js";


export class PublicationSchemaFactory {


    public static create(){


        const registry =

            new PublicationSchemaRegistry();




        registry.register(

            new GitHubConfigSchema()

                .schema()

        );




        registry.register(

            new CustomConfigSchema()

                .schema()

        );




        return registry;


    }


}
