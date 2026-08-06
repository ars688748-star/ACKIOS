import { ACKIOSContext } from "./ACKIOSContext.js";
import { ACKIOSRuntime } from "./ACKIOSRuntime.js";
import { IRuntimeModule } from "./IRuntimeModule.js";

import { ACKIOSServiceRegistryBuilder } from "./services/ACKIOSServiceRegistryBuilder.js";
import { ACKIOSModuleRegistryBuilder } from "./modules/builders/ACKIOSModuleRegistryBuilder.js";

import { IServiceModule } from "../core/modules/IServiceModule.js";
import { EventModule } from "../core/modules/EventModule.js";
import { PlatformModule } from "../core/modules/PlatformModule.js";
import { FirstRunModule } from "../core/modules/FirstRunModule.js";

export class ACKIOSRuntimeBuilder {

    private readonly modules: IRuntimeModule[] =
        new ACKIOSModuleRegistryBuilder().build();

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
            this.modules,
            this.serviceModules
        );

    }

}



