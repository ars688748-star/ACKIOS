import { BrainKernel } from "../core/BrainKernel.js";
import { BrainRuntimeBridge } from "./BrainRuntimeBridge.js";

export class BrainSystem {

    constructor(
        public readonly kernel: BrainKernel,
        public readonly bridge: BrainRuntimeBridge
    ) {}

    public async initialize(): Promise<void> {

        await this.kernel.initialize();

    }

    public async start(): Promise<void> {

        await this.kernel.start();

    }

    public async stop(): Promise<void> {

        await this.kernel.stop();

    }

    public async dispose(): Promise<void> {

        await this.kernel.dispose();

    }

}
