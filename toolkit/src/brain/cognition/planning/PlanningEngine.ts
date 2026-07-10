import { ICognitiveContext } from "../interfaces/ICognitiveContext.js";
import { ICognitiveModule } from "../interfaces/ICognitiveModule.js";

export class PlanningEngine implements ICognitiveModule {

    readonly name = "PlanningEngine";

    async initialize(): Promise<void> {}

    async process(context: ICognitiveContext): Promise<void> {

        const plan = [

            "Analyze",

            "Reason",

            "Decide",

            "Execute"

        ];

        context.state.set("plan", plan);

    }

    async shutdown(): Promise<void> {}

}
