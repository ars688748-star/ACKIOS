import { AnalysisIssue } from "../AnalysisIssue.js";
import { Recommendation } from "../Recommendation.js";

import { RecommendationProvider } from "../contracts/RecommendationProvider.js";

export class ScriptsRecommendation
    implements RecommendationProvider {

    public supports(
        issue: AnalysisIssue
    ): boolean {

        return issue.id.startsWith(
            "package.scripts."
        );

    }

    public create(
        issue: AnalysisIssue
    ): Recommendation {

        const script =
            issue.id.replace(
                "package.scripts.",
                ""
            );

        return {

            id:
                `recommendation.package.scripts.${script}`,

            priority: "medium",

            category: "package",

            title:
                `Add "${script}" script`,

            description:
                `Add a "${script}" entry to the scripts section of package.json.`

        };

    }

}
