import { ReasoningResult } from "../../brain/models/ReasoningResult.js";

export interface ExplainableRecommendation {

    recommendation: string;

    reasoning: ReasoningResult;

}
