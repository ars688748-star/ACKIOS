import { CognitivePipeline } from "../pipeline/CognitivePipeline.js";
import { CognitiveRuntime } from "../runtime/CognitiveRuntime.js";

export function createCognitiveRuntime(): CognitiveRuntime {

    const pipeline = new CognitivePipeline();

    return new CognitiveRuntime(
        pipeline
    );

}
