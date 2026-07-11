import { BrainKernel } from "../core/BrainKernel.js";
import { BrainKernelBuilder } from "../core/BrainKernelBuilder.js";

import { BrainRuntimeBridge } from "./BrainRuntimeBridge.js";
import { BrainRuntimeBridgeBuilder } from "./BrainRuntimeBridgeBuilder.js";

export class BrainSystem {

    constructor(
        public readonly kernel: BrainKernel,
        public readonly bridge: BrainRuntimeBridge
    ) {}

}
