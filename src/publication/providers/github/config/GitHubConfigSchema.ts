import type { PlatformConfigSchema } from "../../../config/schema/PlatformConfigSchema.js";


export class GitHubConfigSchema {


    public schema():

        PlatformConfigSchema {


        return {


            platform:

                "github",



            fields:[


                {


                    id:

                        "token",


                    label:

                        "GitHub Token",


                    type:

                        "password",


                    required:

                        true


                },


                {


                    id:

                        "repository",


                    label:

                        "Repository",


                    type:

                        "text",


                    required:

                        true


                }


            ]


        };


    }


}
