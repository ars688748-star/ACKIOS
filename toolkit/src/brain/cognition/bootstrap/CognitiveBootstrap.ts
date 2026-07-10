import { CognitiveRuntime } from "../runtime/CognitiveRuntime.js";
import { CognitiveRegistry } from "../registry/CognitiveRegistry.js";
import { BrainCognitiveBridge } from "../integration/BrainCognitiveBridge.js";

export function createCognitiveRuntime(){

    const runtime=new CognitiveRuntime();
    const registry=new CognitiveRegistry();

    return new BrainCognitiveBridge(runtime,registry);

}
