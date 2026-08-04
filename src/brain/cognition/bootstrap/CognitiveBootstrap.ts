import { CognitiveRuntime } from "../runtime/CognitiveRuntime.js";
import { CognitiveRuntimeFactory } from "../factory/CognitiveRuntimeFactory.js";

export function createCognitiveRuntime(): CognitiveRuntime {

    return CognitiveRuntimeFactory.create();

}
