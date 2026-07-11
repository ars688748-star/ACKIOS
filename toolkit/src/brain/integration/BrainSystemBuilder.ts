import { BrainKernelConfig } from "../core/BrainKernelConfig.js";
import { BrainKernelBuilder } from "../core/BrainKernelBuilder.js";

import { BrainRuntimeBridgeBuilder } from "./BrainRuntimeBridgeBuilder.js";
import { BrainSystem } from "./BrainSystem.js";

export class BrainSystemBuilder {

    public build(
        config: BrainKernelConfig = {}
    ): BrainSystem {

        return new BrainSystem(

            new BrainKernelBuilder().build(config),

            new BrainRuntimeBridgeBuilder().build()

        );

    }

}
