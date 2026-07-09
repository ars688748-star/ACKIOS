import { WorkspaceState } from "../types/WorkspaceState.js";

import { AnalysisReport } from "./AnalysisReport.js";

import { RuleEngine } from "./RuleEngine.js";
import { RecommendationEngine } from "./RecommendationEngine.js";
import { RecommendationAggregator } from "./RecommendationAggregator.js";
import { ScoreCalculator } from "./ScoreCalculator.js";
import { StatisticsCalculator } from "./StatisticsCalculator.js";
import { SummaryGenerator } from "./SummaryGenerator.js";

import { createRules } from "./RuleRegistry.js";
import { createRecommendationProviders } from "./RecommendationRegistry.js";

export class AnalysisEngine {

    public analyze(
        workspace: WorkspaceState
    ): AnalysisReport {

        const issues =
            new RuleEngine(
                createRules()
            ).analyze(workspace);

        const recommendations =
            new RecommendationEngine(
                createRecommendationProviders()
            ).create(issues);

        const recommendationGroups =
            new RecommendationAggregator()
                .aggregate(recommendations);

        const score =
            new ScoreCalculator()
                .calculate(issues);

        const statistics =
            new StatisticsCalculator()
                .calculate(issues);

        statistics.recommendations =
            recommendations.length;

        statistics.groups =
            recommendationGroups.length;

        return {

            score: score.total,

            categoryScores:
                score.categories,

            issues,

            recommendations,

            recommendationGroups,

            statistics,

            summary:
                new SummaryGenerator()
                    .create(issues)

        };

    }

}
