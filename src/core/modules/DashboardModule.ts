import type { IServiceModule } from "./IServiceModule.js";

import type { ServiceContainer } from "../ServiceContainer.js";
import type { ArchitectureGraphProvider } from "../../architecture/ArchitectureGraphProvider.js";
import type { HealthEngine } from "../../health/HealthEngine.js";
import type { BrainSystem } from "../../brain/integration/BrainSystem.js";
import type { CognitiveRuntime } from "../../brain/cognition/runtime/CognitiveRuntime.js";
import type { ProjectIntelligenceEngine } from "../../intelligence/ProjectIntelligenceEngine.js";

import { DashboardBuilder } from "../../dashboard/core/DashboardBuilder.js";

import { DashboardService } from "../../dashboard/core/DashboardService.js";

import type { PluginExplorerProvider } from "../../plugins/explorer/provider/PluginExplorerProvider.js";



export class DashboardModule implements IServiceModule {



    public register(

        container:

            ServiceContainer

    ): void {






        const provider =

            container.resolve<PluginExplorerProvider>(

                "pluginExplorerProvider"

            );



        console.log("DashboardModule pluginProvider OK");


        const architectureProvider =

            container.resolve<ArchitectureGraphProvider>(

                "architectureGraphProvider"

            );


        console.log("DashboardModule architectureProvider OK");


        const healthEngine =

            container.resolve<HealthEngine>(

                "healthEngine"

            );


        console.log("DashboardModule healthEngine OK");


        const brainSystem =

            container.resolve<BrainSystem>(

                "brainSystem"

            );


        console.log("DashboardModule brainSystem OK");


        const projectIntelligence =

            container.resolve<ProjectIntelligenceEngine>(

                "projectIntelligence"

            );


        console.log("DashboardModule intelligence OK");


        const cognitiveRuntime =

            container.resolve<BrainSystem>(

                "brainSystem"

            ).bridge.cognition;


        const registry =

            new DashboardBuilder()

                .build(

                    provider,

                    architectureProvider,

                    healthEngine,

                    brainSystem,

                    cognitiveRuntime,

                    projectIntelligence

                );



        console.log(

            "DashboardModule: registering dashboard service"

        );


        container.register(

            "dashboard",

            new DashboardService(

                registry

            )

        );


    }


}














