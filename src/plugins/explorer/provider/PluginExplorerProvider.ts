import type { PluginExplorerService } from "../PluginExplorerService.js";

import type { PluginViewModel } from "../PluginViewModel.js";



export class PluginExplorerProvider {



    public constructor(

        private readonly explorer:

            PluginExplorerService

    ){}





    public getPlugins():

        PluginViewModel[] {


        return this.explorer.getPlugins();


    }


}
