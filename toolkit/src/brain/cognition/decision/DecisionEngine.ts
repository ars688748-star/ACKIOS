import { ICognitiveContext } from "../interfaces/ICognitiveContext.js";
import { ICognitiveModule } from "../interfaces/ICognitiveModule.js";

export class DecisionEngine implements ICognitiveModule {

    readonly name = "DecisionEngine";

    async initialize(): Promise<void> {}

    async process(context: ICognitiveContext): Promise<void> {

        const plan = context.state.get("plan");

        const decision = {

            approved: true,

            source: "DecisionEngine",

            plan,

            timestamp: Date.now()

        };

        context.state.set("decision", decision);

    }

    async shutdown(): Promise<void> {}

}
