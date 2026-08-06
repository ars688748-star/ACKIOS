import type { PlatformConfigSchema } from "../../../config/schema/PlatformConfigSchema.js";


export class CustomConfigSchema {


    public schema():

        PlatformConfigSchema {


        return {


            platform:

                "custom",



            fields:[


                {


                    id:

                        "url",


                    label:

                        "Endpoint URL",


                    type:

                        "text",


                    required:

                        true


                },


                {


                    id:

                        "apiKey",


                    label:

                        "API Key",


                    type:

                        "password",


                    required:

                        true


                }


            ]


        };


    }


}
