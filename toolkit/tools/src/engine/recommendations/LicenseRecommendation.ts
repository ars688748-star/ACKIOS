import { AnalysisIssue } from "../AnalysisIssue.js";
import { Recommendation } from "../Recommendation.js";

import { RecommendationProvider } from "../contracts/RecommendationProvider.js";

export class LicenseRecommendation
    implements RecommendationProvider {

    public supports(
        issue: AnalysisIssue
    ): boolean {

        return issue.id === "project.license.file"
            || issue.id === "package.license";

    }

    public create(
        issue: AnalysisIssue
    ): Recommendation {

        if (issue.id === "project.license.file") {

            return {

                id: "recommendation.license.file",

            category: "documentation",

                priority: "high",

                title: "Add a LICENSE file",

                description:
                    "Create a LICENSE file in the project root that matches the license declared in package.json."

            };

        }

        return {

            id: "recommendation.package.license",

            category: "documentation",

            priority: "medium",

            title: "Specify an SPDX license",

            description:
                "Set the package.json license field to a valid SPDX identifier such as MIT, Apache-2.0 or GPL-3.0-or-later."

        };

    }

}
