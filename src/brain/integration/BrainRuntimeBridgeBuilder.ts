import { BrainRuntimeBridge } from "./BrainRuntimeBridge.js";

import { BrainRuntimeBuilder } from "../runtime/host/BrainRuntimeBuilder.js";
import { CognitiveRuntimeFactory } from "../cognition/factory/CognitiveRuntimeFactory.js";

import { BrainServiceRegistry } from "../services/BrainServiceRegistry.js";

export class BrainRuntimeBridgeBuilder {

    public build(
        services?: BrainServiceRegistry
    ): BrainRuntimeBridge {

        const brain =
            new BrainRuntimeBuilder()
                .build(services);


        const cognition =
            CognitiveRuntimeFactory.create();


        return new BrainRuntimeBridge(
            brain,
            cognition
        );

    }

}
