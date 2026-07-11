import { CognitiveRuntime } from "../runtime/CognitiveRuntime.js";
import { CognitivePipeline } from "../pipeline/CognitivePipeline.js";

export class CognitiveRuntimeBuilder {

    public build(): CognitiveRuntime {

        const pipeline = new CognitivePipeline();

        return new CognitiveRuntime(
            pipeline
        );

    }

}
