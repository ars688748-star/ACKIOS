import { ICognitiveContext } from "../interfaces/ICognitiveContext.js";
import { ICognitiveModule } from "../interfaces/ICognitiveModule.js";

export interface CauseEffectRelation {

    cause: string;

    effect: string;

    confidence: number;

}

export class CauseEffectEngine implements ICognitiveModule {

    readonly name = "CauseEffectEngine";

    async initialize(): Promise<void> {}

    async process(context: ICognitiveContext): Promise<void> {

        const prediction = context.state.get("prediction");

        const relation: CauseEffectRelation = {

            cause: prediction ? "prediction" : "unknown",

            effect: "planning",

            confidence: prediction ? 1.0 : 0.0

        };

        context.state.set("causeEffect", relation);

    }

    async shutdown(): Promise<void> {}

}
