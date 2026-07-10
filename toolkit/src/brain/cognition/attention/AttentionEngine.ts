import { ICognitiveContext } from "../interfaces/ICognitiveContext.js";
import { ICognitiveModule } from "../interfaces/ICognitiveModule.js";

export class AttentionEngine implements ICognitiveModule {

    readonly name = "AttentionEngine";

    async process(context: ICognitiveContext): Promise<void> {

    }

}

