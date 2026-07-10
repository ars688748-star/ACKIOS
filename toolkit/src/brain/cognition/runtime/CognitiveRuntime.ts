import { CognitivePipeline } from "../pipeline/CognitivePipeline.js";
import { CognitiveRegistry } from "../registry/CognitiveRegistry.js";
import { ICognitiveContext } from "../interfaces/ICognitiveContext.js";

export class CognitiveRuntime {

    constructor(
        private readonly pipeline: CognitivePipeline,
        private readonly registry: CognitiveRegistry
    ) {}

    register(module: any): void {

        this.pipeline.add(module);

    }

    async initialize(): Promise<void> {

        for (const module of this.registry.getModules()) {

            this.register(module);

        }

    }

    async execute(context: ICognitiveContext): Promise<void> {

        await this.pipeline.execute(context);

    }

}
