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

export class ACKIOSServiceRegistryBuilder {

    public register(
        context: ACKIOSContext,
        modules: readonly IServiceModule[]
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

        for (const module of modules) {

            module.register(
                context.services
            );

        }

    }

}



