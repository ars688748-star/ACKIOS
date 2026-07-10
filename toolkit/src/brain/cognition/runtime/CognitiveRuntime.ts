import { ICognitiveRuntime } from "../interfaces/ICognitiveRuntime.js";
import { ICognitiveModule } from "../interfaces/ICognitiveModule.js";
import { ICognitiveContext } from "../interfaces/ICognitiveContext.js";
import { CognitivePipeline } from "../pipeline/CognitivePipeline.js";

export class CognitiveRuntime implements ICognitiveRuntime {

    private readonly pipeline = new CognitivePipeline();

    register(module: ICognitiveModule): void {
        this.pipeline.add(module);
    }

    async execute(context: ICognitiveContext): Promise<void> {
        await this.pipeline.execute(context);
    }

}

