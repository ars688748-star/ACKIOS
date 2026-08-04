import { ICognitiveContext } from "../interfaces/ICognitiveContext.js";
import { ICognitiveModule } from "../interfaces/ICognitiveModule.js";

export class DecisionEngine implements ICognitiveModule {

    readonly name = "DecisionEngine";

    async initialize(): Promise<void> {}

    async process(context: ICognitiveContext): Promise<void> {

        const plan = context.state.get("plan");

        const causeEffect = context.state.get("causeEffect");

        const confidence = Number(
            context.metadata.get("planning.confidence") ?? 0
        );

        const decision = {

            approved: confidence >= 0.5,

            source: "DecisionEngine",

            confidence,

            plan,

            causeEffect,

            timestamp: Date.now()

        };

        context.state.set("decision", decision);

    }

    async shutdown(): Promise<void> {}

}

