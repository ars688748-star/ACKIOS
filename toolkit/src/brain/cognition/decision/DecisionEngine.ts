import { ICognitiveContext } from "../interfaces/ICognitiveContext.js";
import { ICognitiveModule } from "../interfaces/ICognitiveModule.js";

export class DecisionEngine implements ICognitiveModule {

    readonly name = "DecisionEngine";

    async process(context: ICognitiveContext): Promise<void> {

    }

}

