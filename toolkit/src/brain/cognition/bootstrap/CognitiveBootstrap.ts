import { CognitivePipeline } from "../pipeline/CognitivePipeline.js";
import { CognitiveRegistry } from "../registry/CognitiveRegistry.js";
import { CognitiveRuntime } from "../runtime/CognitiveRuntime.js";

export function createCognitiveRuntime() {

    const pipeline = new CognitivePipeline();

    const registry = new CognitiveRegistry();

    const runtime = new CognitiveRuntime(
        pipeline,
        registry
    );

    return runtime;

}
