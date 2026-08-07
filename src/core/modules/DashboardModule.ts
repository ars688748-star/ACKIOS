import type { IServiceModule } from "./IServiceModule.js";

import type { ServiceContainer } from "../ServiceContainer.js";
import { Logger } from "../Logger.js";
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

    const logger =

        container.resolve<Logger>(

            "logger"

        );







        const provider =

            container.resolve<PluginExplorerProvider>(

                "pluginExplorerProvider"

            );



        logger.info("Dashboard plugin provider initialized");


        const architectureProvider =

            container.resolve<ArchitectureGraphProvider>(

                "architectureGraphProvider"

            );


        logger.info("Dashboard architecture provider initialized");


        const healthEngine =

            container.resolve<HealthEngine>(

                "healthEngine"

            );


        logger.info("Dashboard health engine initialized");


        const brainSystem =

            container.resolve<BrainSystem>(

                "brainSystem"

            );


        logger.info("Dashboard brain system initialized");


        const projectIntelligence =

            container.resolve<ProjectIntelligenceEngine>(

                "projectIntelligence"

            );


        logger.info("Dashboard intelligence initialized");


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



        logger.info("Dashboard service registered");


        container.register(

            "dashboard",

            new DashboardService(

                registry

            )

        );


    }


}





















