import { AnalysisIssue } from "../AnalysisIssue.js";
import { Recommendation } from "../Recommendation.js";

import { RecommendationProvider } from "../contracts/RecommendationProvider.js";

export class EnginesRecommendation
    implements RecommendationProvider {

    public supports(
        issue: AnalysisIssue
    ): boolean {

        return issue.id === "package.engines.node.missing";

    }

    public create(
        _issue: AnalysisIssue
    ): Recommendation {

        return {

            id: "recommendation.engines.node",

            category: "package",

            priority: "medium",

            title: "Specify the supported Node.js version",

            description:
                "Add an engines.node field to package.json (for example: \">=22\") so contributors and CI use a supported Node.js version."

        };

    }

}
