import { RuntimeContext } from "../runtime/context/RuntimeContext.js";
import { BrainRuntime } from "../runtime/host/BrainRuntime.js";
import { CognitiveRuntime } from "../cognition/runtime/CognitiveRuntime.js";
import { ICognitiveContext } from "../cognition/interfaces/ICognitiveContext.js";

export class BrainRuntimeBridge {

    constructor(
        private readonly brain: BrainRuntime,
        private readonly cognition: CognitiveRuntime
    ) {}

    async initialize(): Promise<void> {

        await this.brain.start();
        await this.cognition.initialize();

    }

    async execute(
        brainContext: RuntimeContext,
        cognitiveContext: ICognitiveContext
    ): Promise<RuntimeContext> {

        await this.cognition.execute(cognitiveContext);

        return await this.brain.run(brainContext);

    }

    async shutdown(): Promise<void> {

        await this.cognition.shutdown();
        await this.brain.stop();

    }

}
