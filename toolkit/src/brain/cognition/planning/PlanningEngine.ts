import { ICognitiveContext } from "../interfaces/ICognitiveContext.js";
import { ICognitiveModule } from "../interfaces/ICognitiveModule.js";

export class PlanningEngine implements ICognitiveModule {

    readonly name = "PlanningEngine";

    async initialize(): Promise<void> {}

    async process(context: ICognitiveContext): Promise<void> {

        const causeEffect = context.state.get("causeEffect") as
            | { cause?: string; effect?: string; confidence?: number }
            | undefined;

        const plan = [

            "Analyze",

            causeEffect?.cause ?? "UnknownCause",

            causeEffect?.effect ?? "UnknownEffect",

            "Reason",

            "Decide",

            "Execute"

        ];

        context.state.set("plan", plan);

        context.metadata.set(
            "planning.confidence",
            causeEffect?.confidence ?? 0
        );

    }

    async shutdown(): Promise<void> {}

}
