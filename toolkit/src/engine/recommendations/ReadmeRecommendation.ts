import { AnalysisIssue } from "../AnalysisIssue.js";
import { Recommendation } from "../Recommendation.js";

import { RecommendationProvider } from "../contracts/RecommendationProvider.js";

export class ReadmeRecommendation
    implements RecommendationProvider {

    public supports(
        issue: AnalysisIssue
    ): boolean {

        return issue.id === "project.readme.file";

    }

    public create(
        _issue: AnalysisIssue
    ): Recommendation {

        return {

            id: "recommendation.readme.file",

            category: "documentation",

            priority: "medium",

            title: "Add a README",

            description:
                "Create a README.md describing the project, installation, usage, configuration and license."

        };

    }

}
