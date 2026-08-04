import { AdaptationDecision } from "./models/AdaptationDecision.js";
import { StrategyProfile } from "./models/StrategyProfile.js";


export class StrategyBuilder {


    public build(
        decision: AdaptationDecision
    ): StrategyProfile {


        const executionLevel =
            decision.confidence >= 0.9
                ? "high"
                : decision.confidence >= 0.75
                    ? "standard"
                    : "limited";


        return {


            mode: decision.mode,


            executionLevel,


            enabledFeatures: [

                "environment-analysis",

                "adaptation-engine"

            ],


            restrictions:

                executionLevel === "limited"
                    ? [
                        "resource-limited"
                    ]
                    : [],


            confidence:
                decision.confidence


        };


    }

}
