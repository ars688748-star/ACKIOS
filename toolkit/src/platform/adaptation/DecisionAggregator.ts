import { AdaptationDecision } from "./models/AdaptationDecision.js";


export class DecisionAggregator {


    public aggregate(
        decisions: AdaptationDecision[]
    ): AdaptationDecision | null {


        if (decisions.length === 0) {

            return null;

        }


        const modes =
            decisions
                .map(decision => decision.mode)
                .join("-");


        const reasons =
            decisions.flatMap(
                decision => decision.reasons
            );


        const confidence =
            decisions.reduce(
                (sum, decision) =>
                    sum + decision.confidence,
                0
            ) / decisions.length;


        return {

            mode: modes,

            reasons,

            confidence:
                Number(confidence.toFixed(2))

        };

    }

}
