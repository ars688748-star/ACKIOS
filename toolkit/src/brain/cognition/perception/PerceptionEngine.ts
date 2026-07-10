import { ICognitiveContext } from "../interfaces/ICognitiveContext.js";
import { ICognitiveModule } from "../interfaces/ICognitiveModule.js";

export class PerceptionEngine implements ICognitiveModule {

    readonly name = "PerceptionEngine";

    async process(context: ICognitiveContext): Promise<void> {

    }

}

