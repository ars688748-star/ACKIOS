import { promises as fs } from "fs";

import path from "path";

import type { PluginInfo } from "../PluginInfo.js";


export class PluginScanner {



    public async scan(

        root:

            string

    ): Promise<PluginInfo[]> {


        const plugins:

            PluginInfo[] = [];



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



                plugins.push({


                    id:

                        manifest.id,


                    name:

                        manifest.name,


                    version:

                        manifest.version,


                    status:

                        "installed",


                    path:

                        path.join(

                            root,

                            entry.name

                        )


                });


            }

            catch {


                continue;


            }


        }



        return plugins;


    }


}
