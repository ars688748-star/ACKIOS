import { ACKIOSContext } from "./ACKIOSContext.js";
import { ACKIOSRuntime } from "./ACKIOSRuntime.js";
import { IRuntimeModule } from "./IRuntimeModule.js";

import { ACKIOSServiceRegistryBuilder } from "./services/ACKIOSServiceRegistryBuilder.js";
import { ACKIOSServiceModuleRegistryBuilder } from "./services/ACKIOSServiceModuleRegistryBuilder.js";
import { ACKIOSModuleRegistryBuilder } from "./modules/builders/ACKIOSModuleRegistryBuilder.js";

export class ACKIOSRuntimeBuilder {

    private readonly modules =
        new ACKIOSModuleRegistryBuilder().build();

    private readonly serviceModules =
        new ACKIOSServiceModuleRegistryBuilder().build();

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



