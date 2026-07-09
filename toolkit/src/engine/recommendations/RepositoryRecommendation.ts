import { AnalysisIssue } from "../AnalysisIssue.js";
import { Recommendation } from "../Recommendation.js";

import { RecommendationProvider } from "../contracts/RecommendationProvider.js";

export class RepositoryRecommendation
    implements RecommendationProvider {

    public supports(
        issue: AnalysisIssue
    ): boolean {

        return issue.id === "repository";

    }

    public create(
        _issue: AnalysisIssue
    ): Recommendation {

        return {

            id: "recommendation.repository",

            category: "repository",

            priority: "medium",

            title: "Repository recommendation",

            description:
                "Describe how to resolve this issue."

        };

    }

}
