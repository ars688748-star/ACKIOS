import { ICognitiveContext } from "../interfaces/ICognitiveContext.js";
import { ICognitiveModule } from "../interfaces/ICognitiveModule.js";

export class GoalEngine implements ICognitiveModule {

    readonly name = "GoalEngine";

    async process(context: ICognitiveContext): Promise<void> {

    }

}

