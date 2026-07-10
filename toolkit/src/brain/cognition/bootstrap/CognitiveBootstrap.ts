import { CognitiveRuntime } from "../runtime/CognitiveRuntime.js";
import { CognitiveRegistry } from "../registry/CognitiveRegistry.js";
import { BrainCognitiveBridge } from "../integration/BrainCognitiveBridge.js";
import { registerDefaultCognitiveModules } from "./RegisterDefaultModules.js";

export function createCognitiveRuntime(){

    const runtime = new CognitiveRuntime();

    const registry = new CognitiveRegistry();

    registerDefaultCognitiveModules(registry);

    return new BrainCognitiveBridge(
        runtime,
        registry
    );

}
