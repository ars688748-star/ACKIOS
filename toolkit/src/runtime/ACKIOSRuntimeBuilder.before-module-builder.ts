import { ACKIOSContext } from "./ACKIOSContext.js";
import { ACKIOSRuntime } from "./ACKIOSRuntime.js";
import { IRuntimeModule } from "./IRuntimeModule.js";

import { WorkspaceModule } from "./modules/WorkspaceModule.js";
import { ArchitectureModule } from "./modules/ArchitectureModule.js";
import { BrainModule } from "./modules/BrainModule.js";
import { AdaptationModule } from "./modules/AdaptationModule.js";
import { FirstRunRuntimeModule } from "./modules/FirstRunRuntimeModule.js";

import { ACKIOSServiceRegistryBuilder } from "./services/ACKIOSServiceRegistryBuilder.js";

import { IServiceModule } from "../core/modules/IServiceModule.js";
import { EventModule } from "../core/modules/EventModule.js";
import { PlatformModule } from "../core/modules/PlatformModule.js";
import { FirstRunModule } from "../core/modules/FirstRunModule.js";

export class ACKIOSRuntimeBuilder {

    private readonly modules: IRuntimeModule[] = [
        new WorkspaceModule(),
        new ArchitectureModule(),
        new BrainModule(),
        new AdaptationModule(),
        new FirstRunRuntimeModule()
    ];

    private readonly serviceModules: IServiceModule[] = [
        new EventModule(),
        new PlatformModule(),
        new FirstRunModule()
    ];

    public addModule(module: IRuntimeModule): this {

        this.modules.push(module);

        return this;

    }

    public build(): ACKIOSRuntime {

        const context = new ACKIOSContext();

        new ACKIOSServiceRegistryBuilder().register(
            context,
            this.serviceModules
        );

        return new ACKIOSRuntime(
            context,
            this.modules
        );

    }

}
