import { ICognitiveContext } from "../interfaces/ICognitiveContext.js";
import { ICognitiveModule } from "../interfaces/ICognitiveModule.js";

export class PredictionEngine implements ICognitiveModule {

    readonly name = "PredictionEngine";

    async process(context: ICognitiveContext): Promise<void> {

    }

}

