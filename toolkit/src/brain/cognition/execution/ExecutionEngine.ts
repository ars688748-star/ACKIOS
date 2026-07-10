import { ICognitiveContext } from "../interfaces/ICognitiveContext.js";
import { ICognitiveModule } from "../interfaces/ICognitiveModule.js";

export class ExecutionEngine implements ICognitiveModule {

    readonly name = "ExecutionEngine";

    async initialize(): Promise<void> {}

    async process(context: ICognitiveContext): Promise<void> {

        const decision = context.state.get("decision");

        context.state.set("execution",{

            executed:true,

            decision,

            finishedAt:Date.now()

        });

    }

    async shutdown(): Promise<void> {}

}
