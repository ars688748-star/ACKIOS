import { ACKIOSContext } from "../ACKIOSContext.js";

import { Logger } from "../../core/Logger.js";
import { Workspace } from "../../workspace/Workspace.js";
import { ProcessRunner } from "../../infrastructure/ProcessRunner.js";
import { Toolkit } from "../../Toolkit.js";

import { BrainSystemBuilder } from "../../brain/integration/BrainSystemBuilder.js";
import { ArchitectureAnalysisEngine } from "../../architecture/ArchitectureAnalysisEngine.js";
import { ArchitectureGraphProvider } from "../../architecture/ArchitectureGraphProvider.js";
import { GalaxyArchitectureProviderBridge } from "../../visualization/GalaxyArchitectureProviderBridge.js";
import { PlatformManager } from "../../platform/PlatformManager.js";
import { ProjectIntelligenceBuilder } from "../../intelligence/ProjectIntelligenceBuilder.js";

import { IServiceModule } from "../../core/modules/IServiceModule.js";
import { ACKIOSServiceModuleRegistryBuilder } from "./ACKIOSServiceModuleRegistryBuilder.js";
import { IInitializableModule } from "../../core/modules/IInitializableModule.js";
import { PluginManager } from "../../plugins/manager/PluginManager.js";
import { PluginExplorerService } from "../../plugins/explorer/PluginExplorerService.js";
import { DashboardController } from "../../dashboard/api/DashboardController.js";
import { DashboardService } from "../../dashboard/core/DashboardService.js";
import { PluginExplorerProvider } from "../../plugins/explorer/provider/PluginExplorerProvider.js";

export class ACKIOSServiceRegistryBuilder {

    public register(
        context: ACKIOSContext,
        modules: readonly IServiceModule[] = new ACKIOSServiceModuleRegistryBuilder().build()
    ): void {

        context.services.register(
            "logger",
            new Logger()
        );

        context.services.register(
            "workspace",
            new Workspace()
        );

        context.services.register(
            "processRunner",
            new ProcessRunner()
        );

        context.services.register(
            "toolkit",
            new Toolkit()
        );


        context.services.register(
            "pluginManager",
            new PluginManager()
        );


        context.services.register(
            "pluginExplorer",
            new PluginExplorerService(
                context.services.resolve<PluginManager>(
                    "pluginManager"
                )
            )
        );


        context.services.register(
            "pluginExplorerProvider",
            new PluginExplorerProvider(
                context.services.resolve<PluginExplorerService>(
                    "pluginExplorer"
                )
            )
        );

        context.services.register(
            "brainSystem",
            new BrainSystemBuilder().build()
        );

        context.services.register(
            "projectIntelligence",
            new ProjectIntelligenceBuilder().build()
        );

        context.services.register(
            "architectureEngine",
            new ArchitectureAnalysisEngine()
        );

        context.services.register(
            "architectureGraphProvider",
            new ArchitectureGraphProvider()
        );

        context.services.register(
            "galaxyArchitectureBridge",
            new GalaxyArchitectureProviderBridge()
        );

        context.services.registerFactory(
            "platformManager",
            () => new PlatformManager()
        );


        const activeModules =

            modules.length > 0

                ? modules

                : new ACKIOSServiceModuleRegistryBuilder().build();


        for (const module of activeModules) {

            module.register(
                context.services
            );

        }


        context.services.register(
            "dashboardController",
            new DashboardController(
                context.services.resolve<DashboardService>(
                    "dashboard"
                )
            )
        );

    }

}
























