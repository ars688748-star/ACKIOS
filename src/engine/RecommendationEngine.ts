import { AnalysisIssue } from "./AnalysisIssue.js";
import { Recommendation } from "./Recommendation.js";

import { RecommendationProvider } from "./contracts/RecommendationProvider.js";

export class RecommendationEngine {

    public constructor(
        private readonly providers: RecommendationProvider[]
    ) {}

    public create(
        issues: AnalysisIssue[]
    ): Recommendation[] {

        const recommendations: Recommendation[] = [];

        for (const issue of issues) {

            const provider = this.providers.find(
                p => p.supports(issue)
            );

            if (!provider) {
                continue;
            }

            recommendations.push(
                provider.create(issue)
            );

        }

        return recommendations;

    }

}
