import { ACKIOSContext } from "./ACKIOSContext.js";
import { ACKIOSRuntime } from "./ACKIOSRuntime.js";
import { IRuntimeModule } from "./IRuntimeModule.js";
import { WorkspaceModule } from "./modules/WorkspaceModule.js";
import { BrainModule } from "./modules/BrainModule.js";

export class ACKIOSRuntimeBuilder {

    private readonly modules: IRuntimeModule[] = [
        new WorkspaceModule(),
        new BrainModule()
    ];

    public addModule(module: IRuntimeModule): this {

        this.modules.push(module);

        return this;

    }

    public build(): ACKIOSRuntime {

        return new ACKIOSRuntime(
            new ACKIOSContext(),
            this.modules
        );

    }

}
