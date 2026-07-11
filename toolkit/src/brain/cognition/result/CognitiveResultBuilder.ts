import { ICognitiveContext } from "../interfaces/ICognitiveContext.js";
import { CognitiveResult } from "./CognitiveResult.js";

export class CognitiveResultBuilder {

    build(
        context: ICognitiveContext
    ): CognitiveResult {

        return {

            prediction:
                context.state.get("prediction"),

            causeEffect:
                context.state.get("causeEffect"),

            impact:
                context.state.get("impact"),

            plan:
                context.state.get("plan"),

            decision:
                context.state.get("decision"),

            execution:
                context.state.get("execution"),

            reflection:
                context.state.get("reflection"),

            selfEvaluation:
                context.state.get("selfEvaluation"),

            goals:
                context.state.get("goals")

        };

    }

}
