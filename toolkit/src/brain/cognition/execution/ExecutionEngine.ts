import { ICognitiveContext } from "../interfaces/ICognitiveContext.js";
import { ICognitiveModule } from "../interfaces/ICognitiveModule.js";

export class ExecutionEngine implements ICognitiveModule {

    readonly name = "ExecutionEngine";

    async process(context: ICognitiveContext): Promise<void> {

    }

}

