import { BrainRuntimeBridge } from "../../brain/integration/BrainRuntimeBridge.js";
import { BrainRuntimeBuilder } from "../../brain/runtime/host/BrainRuntimeBuilder.js";
import { CognitiveRuntimeFactory } from "../../brain/cognition/factory/CognitiveRuntimeFactory.js";

export class BrainIntegration {

    public static createDefault(): BrainIntegration {

        return new BrainIntegration(

            new BrainRuntimeBridge(

                new BrainRuntimeBuilder().build(),

                CognitiveRuntimeFactory.create()

            )

        );

    }

    public constructor(
        private readonly bridge: BrainRuntimeBridge
    ) {}

    public async initialize(): Promise<void> {

    }

    public async start(): Promise<void> {

        await this.bridge.initialize();

    }

    public async stop(): Promise<void> {

        await this.bridge.shutdown();

    }

}
