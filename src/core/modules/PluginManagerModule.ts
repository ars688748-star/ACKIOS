import type { IServiceModule } from "./IServiceModule.js";

import type { IInitializableModule } from "./IInitializableModule.js";

import type { ServiceContainer } from "../ServiceContainer.js";

import { PluginManager } from "../../plugins/manager/PluginManager.js";



export class PluginManagerModule

    implements IServiceModule, IInitializableModule {



    private manager?: PluginManager;



    public register(

        container:

            ServiceContainer

    ): void {



        this.manager =

            container.resolve<PluginManager>(

                "pluginManager"

            );


    }





    public async initialize():

        Promise<void> {


        if(!this.manager){

            return;

        }



        await this.manager.discover(

            ".ackios/plugins"

        );


    }



}

