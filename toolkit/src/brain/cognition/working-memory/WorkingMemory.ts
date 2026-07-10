import { ICognitiveContext } from "../interfaces/ICognitiveContext.js";
import { ICognitiveModule } from "../interfaces/ICognitiveModule.js";

export class WorkingMemory implements ICognitiveModule {

    readonly name = "WorkingMemory";

    async process(context: ICognitiveContext): Promise<void> {

    void context;

}

async initialize(): Promise<void> {

}

async shutdown(): Promise<void> {

}

}


