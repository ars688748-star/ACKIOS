import { AnalysisIssue } from "../AnalysisIssue.js";
import { Recommendation } from "../Recommendation.js";

import { RecommendationProvider } from "../contracts/RecommendationProvider.js";

export class SecurityRecommendation
    implements RecommendationProvider {

    public supports(
        issue: AnalysisIssue
    ): boolean {

        return issue.id === "security";

    }

    public create(
        _issue: AnalysisIssue
    ): Recommendation {

        return {

            id: "recommendation.security",

            category: "security",

            priority: "medium",

            title: "Security recommendation",

            description:
                "Describe how to resolve this issue."

        };

    }

}
