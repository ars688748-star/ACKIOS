import { CognitivePipeline } from "../pipeline/CognitivePipeline.js";
import { ICognitiveContext } from "../interfaces/ICognitiveContext.js";

export class CognitiveRuntime {

    constructor(
        private readonly pipeline: CognitivePipeline
    ) {}

    async initialize(): Promise<void> {

    }

    async execute(context: ICognitiveContext): Promise<void> {

        await this.pipeline.execute(context);

    }

}
