import { BrainKernelConfig } from "../core/BrainKernelConfig.js";
import { BrainKernelBuilder } from "../core/BrainKernelBuilder.js";

import { BrainRuntimeBridgeBuilder } from "./BrainRuntimeBridgeBuilder.js";
import { BrainSystem } from "./BrainSystem.js";

export class BrainSystemBuilder {

    public build(
        config: BrainKernelConfig = {}
    ): BrainSystem {

        const kernel =
            new BrainKernelBuilder()
                .build(config);

        const bridge =
            new BrainRuntimeBridgeBuilder()
                .build(kernel.services);

        return new BrainSystem(
            kernel,
            bridge
        );

    }

}
