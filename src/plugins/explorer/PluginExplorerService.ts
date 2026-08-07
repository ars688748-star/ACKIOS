import type { PluginManager } from "../manager/PluginManager.js";

import type { PluginViewModel } from "./PluginViewModel.js";



export class PluginExplorerService {



    public constructor(

        private readonly manager:

            PluginManager

    ){}





    public getPlugins():

        PluginViewModel[] {


        return this.manager.list()

            .map(

                plugin => ({


                    id:

                        plugin.id,


                    name:

                        plugin.name,


                    version:

                        plugin.version,


                    status:

                        plugin.status


                })

            );


    }


}
