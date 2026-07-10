import { ICognitiveContext } from "../interfaces/ICognitiveContext.js";
import { ICognitiveModule } from "../interfaces/ICognitiveModule.js";

export class WorldModel implements ICognitiveModule {

    readonly name = "WorldModel";

    async process(context: ICognitiveContext): Promise<void> {

    void context;

}

async initialize(): Promise<void> {

}

async shutdown(): Promise<void> {

}

}


