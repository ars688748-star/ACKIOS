import { RuntimeModuleRegistry } from "./RuntimeModuleRegistry.js";

import { RuntimeDiscovery } from "./RuntimeDiscovery.js";

import { DefaultRuntimeModules } from "./DefaultRuntimeModules.js";

import type { AckiosRuntimeOrchestrator } from "../core/AckiosRuntimeOrchestrator.js";



export class RuntimeBootstrap {



    private readonly registry =

        new RuntimeModuleRegistry();



    private readonly discovery =

        new RuntimeDiscovery();





    public initialize(

        orchestrator:

            AckiosRuntimeOrchestrator

    ): void {



        const modules =

            this.discovery.discover(

                DefaultRuntimeModules.create()

            );



        for (const module of modules) {


            this.registry.add(

                module

            );


            orchestrator.register(

                module

            );


        }


    }





    public getRegistry(){

        return this.registry;

    }


}
