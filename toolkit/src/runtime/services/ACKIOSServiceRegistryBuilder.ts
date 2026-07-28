import { ACKIOSContext } from "../ACKIOSContext.js";

import { Logger } from "../../core/Logger.js";
import { Workspace } from "../../workspace/Workspace.js";
import { ProcessRunner } from "../../infrastructure/ProcessRunner.js";
import { Toolkit } from "../../Toolkit.js";

import { BrainSystemBuilder } from "../../brain/integration/BrainSystemBuilder.js";
import { ArchitectureAnalysisEngine } from "../../architecture/ArchitectureAnalysisEngine.js";
import { PlatformManager } from "../../platform/PlatformManager.js";

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
            "architectureEngine",
            new ArchitectureAnalysisEngine()
        );

        context.services.register(
            "platformManager",
            new PlatformManager()
        );

        for (const module of modules) {

            module.register(
                context.services
            );

        }

    }

}



