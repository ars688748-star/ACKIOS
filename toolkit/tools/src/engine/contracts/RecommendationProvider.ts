import { AnalysisIssue } from "../AnalysisIssue.js";
import { Recommendation } from "../Recommendation.js";

export interface RecommendationProvider {

    supports(
        issue: AnalysisIssue
    ): boolean;

    create(
        issue: AnalysisIssue
    ): Recommendation;

}
