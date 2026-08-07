import type { PluginExplorerProvider } from "../../../plugins/explorer/provider/PluginExplorerProvider.js";

import type { PluginWidgetModel } from "./PluginWidgetModel.js";



export class PluginWidgetService {



    public constructor(

        private readonly provider:

            PluginExplorerProvider

    ){}



    public getWidget():

        PluginWidgetModel {


        const plugins =

            this.provider.getPlugins();



        return {

            title:

                "Plugins",


            count:

                plugins.length,


            plugins

        };


    }


}
