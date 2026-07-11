import { BrainRuntimeBridge } from "./BrainRuntimeBridge.js";

import { BrainRuntimeBuilder } from "../runtime/host/BrainRuntimeBuilder.js";
import { CognitiveRuntimeBuilder } from "../cognition/factory/CognitiveRuntimeBuilder.js";

export class BrainRuntimeBridgeBuilder {

    public build(): BrainRuntimeBridge {

        const brain = new BrainRuntimeBuilder().build();

        const cognition = new CognitiveRuntimeBuilder().build();

        return new BrainRuntimeBridge(
            brain,
            cognition
        );

    }

}
