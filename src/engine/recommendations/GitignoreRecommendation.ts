import { AnalysisIssue } from "../AnalysisIssue.js";
import { Recommendation } from "../Recommendation.js";

import { RecommendationProvider } from "../contracts/RecommendationProvider.js";

export class GitignoreRecommendation
    implements RecommendationProvider {

    public supports(
        issue: AnalysisIssue
    ): boolean {

        return issue.id === "repository.gitignore";

    }

    public create(
        _issue: AnalysisIssue
    ): Recommendation {

        return {

            id: "recommendation.gitignore",

            category: "repository",

            priority: "high",

            title: "Create .gitignore",

            description:
                "Add a .gitignore file and ignore generated files, dependencies and secrets."

        };

    }

}
