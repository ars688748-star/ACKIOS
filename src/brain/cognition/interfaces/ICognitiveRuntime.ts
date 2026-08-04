import { ICognitiveContext } from "./ICognitiveContext.js";
import { ICognitiveModule } from "./ICognitiveModule.js";

export interface ICognitiveRuntime {

    register(module: ICognitiveModule): void;

    unregister(name: string): boolean;

    modules(): readonly ICognitiveModule[];

    initialize(): Promise<void>;

    execute(context: ICognitiveContext): Promise<void>;

    shutdown(): Promise<void>;

}
