import { ACKIOSContext } from "./ACKIOSContext.js";
import { ACKIOSRuntime } from "./ACKIOSRuntime.js";
import { IRuntimeModule } from "./IRuntimeModule.js";

import { Logger } from "../core/Logger.js";
import { Workspace } from "../workspace/Workspace.js";
import { ProcessRunner } from "../infrastructure/ProcessRunner.js";
import { Toolkit } from "../Toolkit.js";

import { BrainSystemBuilder } from "../brain/integration/BrainSystemBuilder.js";
import { ArchitectureAnalysisEngine } from "../architecture/ArchitectureAnalysisEngine.js";

import { WorkspaceModule } from "./modules/WorkspaceModule.js";
import { ArchitectureModule } from "./modules/ArchitectureModule.js";
import { BrainModule } from "./modules/BrainModule.js";

import { IServiceModule } from "../core/modules/IServiceModule.js";
import { EventModule } from "../core/modules/EventModule.js";
import { PlatformModule } from "../core/modules/PlatformModule.js";

export class ACKIOSRuntimeBuilder {

    private readonly modules: IRuntimeModule[] = [
        new WorkspaceModule(),
        new ArchitectureModule(),
        new BrainModule()
    ];

    private readonly serviceModules: IServiceModule[] = [
        new EventModule(),
        new PlatformModule()
    ];

    public addModule(module: IRuntimeModule): this {

        this.modules.push(module);

        return this;

    }

    public build(): ACKIOSRuntime {

        const context = new ACKIOSContext();

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

        for (const module of this.serviceModules) {

            module.register(
                context.services
            );

        }

        return new ACKIOSRuntime(
            context,
            this.modules
        );

    }

}
