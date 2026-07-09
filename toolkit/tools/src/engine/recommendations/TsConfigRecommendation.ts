import { AnalysisIssue } from "../AnalysisIssue.js";
import { Recommendation } from "../Recommendation.js";

import { RecommendationProvider } from "../contracts/RecommendationProvider.js";

export class TsConfigRecommendation
    implements RecommendationProvider {

    public supports(
        issue: AnalysisIssue
    ): boolean {

        return issue.id.startsWith(
            "typescript."
        );

    }

    public create(
        issue: AnalysisIssue
    ): Recommendation {

        return {

            id:
                "recommendation." + issue.id,

            priority: "high",

            category: "typescript",

            title:
                "Improve TypeScript configuration",

            description:
                issue.description

        };

    }

}
