import { ICognitiveContext } from "../interfaces/ICognitiveContext.js";
import { ICognitiveModule } from "../interfaces/ICognitiveModule.js";

export interface SelfEvaluation {

    score: number;

    confidence: number;

    learningSignal: boolean;

}

export class SelfEvaluationEngine implements ICognitiveModule {

    readonly name = "SelfEvaluationEngine";

    async initialize(): Promise<void> {}

    async process(context: ICognitiveContext): Promise<void> {

        const reflection = context.state.get("reflection");

        const evaluation: SelfEvaluation = {

            score: reflection ? 1 : 0,

            confidence: reflection ? 1.0 : 0.0,

            learningSignal: reflection !== undefined

        };

        context.state.set("selfEvaluation", evaluation);

    }

    async shutdown(): Promise<void> {}

}
