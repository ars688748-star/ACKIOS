import { CognitivePipeline } from "../pipeline/CognitivePipeline.js";
import { CognitiveRuntime } from "../runtime/CognitiveRuntime.js";

export class CognitiveRuntimeFactory {

    static create(): CognitiveRuntime {

        const pipeline = new CognitivePipeline();

        return new CognitiveRuntime(
            pipeline
        );

    }

}
