import { ICognitiveContext } from "./ICognitiveContext.js";

export interface ICognitiveModule {

    readonly name: string;

    initialize?(): Promise<void>;

    process(context: ICognitiveContext): Promise<void>;

    shutdown?(): Promise<void>;

}
