import { BrainRuntimeBridge } from "./BrainRuntimeBridge.js";

import { BrainRuntimeBuilder } from "../runtime/host/BrainRuntimeBuilder.js";
import { CognitiveRuntimeBuilder } from "../cognition/factory/CognitiveRuntimeBuilder.js";

import { BrainServiceRegistry } from "../services/BrainServiceRegistry.js";

export class BrainRuntimeBridgeBuilder {

    public build(
        services?: BrainServiceRegistry
    ): BrainRuntimeBridge {

        const brain =
            new BrainRuntimeBuilder()
                .build(services);

        const cognition =
            new CognitiveRuntimeBuilder()
                .build();

        return new BrainRuntimeBridge(
            brain,
            cognition
        );

    }

}
