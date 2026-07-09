import { AnalysisIssue } from "../AnalysisIssue.js";
import { Recommendation } from "../Recommendation.js";

import { RecommendationProvider } from "../contracts/RecommendationProvider.js";

export class PackageManagerRecommendation
    implements RecommendationProvider {

    public supports(
        issue: AnalysisIssue
    ): boolean {

        return issue.id === "package.packageManager.missing";

    }

    public create(
        _issue: AnalysisIssue
    ): Recommendation {

        return {

            id: "recommendation.packageManager",

            category: "package",

            priority: "medium",

            title: "Specify the package manager",

            description:
                "Add the packageManager field to package.json to ensure contributors and CI use the same package manager version (for example: npm@11, pnpm@10, yarn@4 or bun@1)."

        };

    }

}
