import { promises as fs } from "fs";

import path from "path";

import type { PublicationPluginManifest } from "../manifest/PublicationPluginManifest.js";

import { PublicationPluginManifestValidator } from "../validator/PublicationPluginManifestValidator.js";



export class PublicationPluginScanner {



    public async scan(

        root:

            string

    ): Promise<PublicationPluginManifest[]> {



        const manifests:

            PublicationPluginManifest[] = [];



        const entries =

            await fs.readdir(

                root,

                {

                    withFileTypes:true

                }

            );



        for(const entry of entries){



            if(!entry.isDirectory()){

                continue;

            }



            const manifestPath =

                path.join(

                    root,

                    entry.name,

                    "plugin.json"

                );



            try {



                const content =

                    await fs.readFile(

                        manifestPath,

                        "utf8"

                    );



                const manifest =

                    JSON.parse(

                        content

                    );



                manifest.path =

                    path.resolve(

                        root,

                        entry.name,

                        manifest.entry

                    );

                const validator =

                    new PublicationPluginManifestValidator();



                if(

                    validator.validate(

                        manifest

                    )

                ){


                    manifests.push(

                        manifest

                    );


                }



            }

            catch {



                continue;

            }



        }



        return manifests;


    }


}




