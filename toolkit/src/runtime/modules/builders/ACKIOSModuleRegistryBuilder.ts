import { IRuntimeModule } from "../../IRuntimeModule.js";

import { WorkspaceModule } from "../WorkspaceModule.js";
import { ArchitectureModule } from "../ArchitectureModule.js";
import { BrainModule } from "../BrainModule.js";
import { AdaptationModule } from "../AdaptationModule.js";
import { FirstRunRuntimeModule } from "../FirstRunRuntimeModule.js";

export class ACKIOSModuleRegistryBuilder {

    public build(): IRuntimeModule[] {

        return [
            new WorkspaceModule(),
            new ArchitectureModule(),
            new BrainModule(),
            new AdaptationModule(),
            new FirstRunRuntimeModule()
        ];

    }

}
