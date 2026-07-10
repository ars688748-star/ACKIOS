import { ICognitiveContext } from "./ICognitiveContext.js";

export interface ICognitiveModule {
    readonly name: string;
    process(context: ICognitiveContext): Promise<void>;
}

