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

        const relations: CauseEffectRelation[] = [];

        const prediction =
            context.state.get("prediction");

        if (prediction) {

            relations.push({

                cause: "prediction",

                effect: "planning",

                confidence: 1.0

            });

        }

        context.state.set(
            "causeEffect",
            relations
        );

    }

    async shutdown(): Promise<void> {}

}