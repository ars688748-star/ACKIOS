import { Workspace } from "../workspace/Workspace.js";
import { WorkspaceState } from "../types/WorkspaceState.js";

import { AnalysisReport } from "./AnalysisReport.js";
import { RecommendationAggregator } from "./RecommendationAggregator.js";
import { RecommendationEngine } from "./RecommendationEngine.js";
import { RuleEngine } from "./RuleEngine.js";
import { ScoreCalculator } from "./ScoreCalculator.js";
import { StatisticsCalculator } from "./StatisticsCalculator.js";
import { SummaryGenerator } from "./SummaryGenerator.js";

export class AnalysisEngine {

    constructor(
        private readonly ruleEngine: RuleEngine,
        private readonly recommendationEngine: RecommendationEngine,
        private readonly recommendationAggregator: RecommendationAggregator,
        private readonly scoreCalculator: ScoreCalculator,
        private readonly statisticsCalculator: StatisticsCalculator,
        private readonly summaryGenerator: SummaryGenerator
    ) {}

    public analyze(
        workspace: Workspace | WorkspaceState
    ): AnalysisReport {

        const state =
            workspace instanceof Workspace
                ? workspace.getState()
                : workspace;

        const issues =
            this.ruleEngine.analyze(state);

        const recommendations =
            this.recommendationEngine.create(issues);

        const recommendationGroups =
            this.recommendationAggregator.aggregate(recommendations);

        const score =
            this.scoreCalculator.calculate(issues);

        const statistics =
            this.statisticsCalculator.calculate(issues);

        statistics.recommendations =
            recommendations.length;

        statistics.groups =
            recommendationGroups.length;

        return {

            score: score.total,

            categoryScores: score.categories,

            issues,

            recommendations,

            recommendationGroups,

            statistics,

            summary:
                this.summaryGenerator.create(issues)

        };

    }

}
