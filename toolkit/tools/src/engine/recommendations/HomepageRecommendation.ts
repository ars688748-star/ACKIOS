import { AnalysisIssue } from "../AnalysisIssue.js";
import { Recommendation } from "../Recommendation.js";

import { RecommendationProvider } from "../contracts/RecommendationProvider.js";

export class HomepageRecommendation
    implements RecommendationProvider {

    public supports(
        issue: AnalysisIssue
    ): boolean {

        return issue.id === "homepage";

    }

    public create(
        _issue: AnalysisIssue
    ): Recommendation {

        return {

            id: "recommendation.homepage",

            category: "package",

            priority: "medium",

            title: "Homepage recommendation",

            description:
                "Describe how to resolve this issue."

        };

    }

}
