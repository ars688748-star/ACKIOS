import { CognitivePipeline } from "../pipeline/CognitivePipeline.js";
import { CognitiveRegistry } from "../registry/CognitiveRegistry.js";

export class CognitiveRuntime {

    constructor(
        private readonly pipeline: CognitivePipeline,
        private readonly registry: CognitiveRegistry
    ) {}

    async initialize(): Promise<void> {

        for (const stage of this.registry.getStages()) {
            this.pipeline.register(stage);
        }

    }

    async execute(context: unknown): Promise<void> {

        await this.pipeline.execute(context);

    }

}
