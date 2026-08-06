import type { PlatformConfigSchema } from "../schema/PlatformConfigSchema.js";


export class PublicationSchemaRegistry {


    private readonly schemas =

        new Map<string, PlatformConfigSchema>();





    public register(

        schema:

            PlatformConfigSchema

    ){


        this.schemas.set(

            schema.platform,

            schema

        );


    }





    public get(

        platform:

            string

    ):


        PlatformConfigSchema | undefined {


        return this.schemas.get(

            platform

        );


    }





    public list():

        PlatformConfigSchema[] {


        return Array.from(

            this.schemas.values()

        );


    }


}
