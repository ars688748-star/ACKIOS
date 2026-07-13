import { ReasoningEngine } from "../../brain/reasoning/ReasoningEngine.js";

import { ExplainableRecommendation } from "./ExplainableRecommendation.js";

export class ExplainableRecommendationEngine {

    private readonly reasoning = new ReasoningEngine();

    public recommend(
        text: string
    ): ExplainableRecommendation {

        return {

            recommendation: text,

            reasoning: this.reasoning.explain(text)

        };

    }

}
