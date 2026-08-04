import { AnalysisIssue } from "../AnalysisIssue.js";
import { Recommendation } from "../Recommendation.js";

import { RecommendationProvider } from "../contracts/RecommendationProvider.js";

export class DependenciesRecommendation
    implements RecommendationProvider {

    public supports(
        issue: AnalysisIssue
    ): boolean {

        return issue.id.startsWith(
            "dependencies."
        );

    }

    public create(
        issue: AnalysisIssue
    ): Recommendation {

        return {

            id:
                `recommendation.${issue.id}`,

            priority: "medium",

            category: "dependencies",

            title:
                "Review project dependencies",

            description:
                "Review the project's dependencies and keep only the packages that are actually required."

        };

    }

}
