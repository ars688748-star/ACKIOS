import { BrainRuntimeBridge } from "../../brain/integration/BrainRuntimeBridge.js";
import { BrainRuntimeBuilder } from "../../brain/runtime/host/BrainRuntimeBuilder.js";
import { CognitiveRuntimeFactory } from "../../brain/cognition/factory/CognitiveRuntimeFactory.js";

export class BrainIntegration {

    private readonly bridge = new BrainRuntimeBridge(
        new BrainRuntimeBuilder().build(),
        CognitiveRuntimeFactory.create()
    );

    public async initialize(): Promise<void> {

    }

    public async start(): Promise<void> {

        await this.bridge.initialize();

    }

    public async stop(): Promise<void> {

        await this.bridge.shutdown();

    }

}
