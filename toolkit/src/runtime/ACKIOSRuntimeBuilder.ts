import { ACKIOSContext } from "./ACKIOSContext.js";
import { ACKIOSRuntime } from "./ACKIOSRuntime.js";
import { IRuntimeModule } from "./IRuntimeModule.js";

import { Logger } from "../core/Logger.js";
import { Workspace } from "../workspace/Workspace.js";
import { ProcessRunner } from "../infrastructure/ProcessRunner.js";

import { BrainSystemBuilder } from "../brain/integration/BrainSystemBuilder.js";
import { ArchitectureAnalysisEngine } from "../architecture/ArchitectureAnalysisEngine.js";

import { WorkspaceModule } from "./modules/WorkspaceModule.js";
import { ArchitectureModule } from "./modules/ArchitectureModule.js";
import { BrainModule } from "./modules/BrainModule.js";

export class ACKIOSRuntimeBuilder {

    private readonly modules: IRuntimeModule[] = [
        new WorkspaceModule(),
        new ArchitectureModule(),
        new BrainModule()
    ];

    public addModule(module: IRuntimeModule): this {

        this.modules.push(module);

        return this;

    }

    public build(): ACKIOSRuntime {

        const context = new ACKIOSContext();

        context.services.register("logger", new Logger());
        context.services.register("workspace", new Workspace());
        context.services.register("processRunner", new ProcessRunner());

        context.services.register(
            "brainSystem",
            new BrainSystemBuilder().build()
        );

        context.services.register(
            "architectureEngine",
            new ArchitectureAnalysisEngine()
        );

        return new ACKIOSRuntime(
            context,
            this.modules
        );

    }

}
