import { ICognitiveContext } from "./ICognitiveContext.js";
import { ICognitiveModule } from "./ICognitiveModule.js";

export interface ICognitiveRuntime {
    register(module: ICognitiveModule): void;
    execute(context: ICognitiveContext): Promise<void>;
}

