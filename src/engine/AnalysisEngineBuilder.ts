import { RecommendationAggregator } from "./RecommendationAggregator.js";
import { RecommendationEngine } from "./RecommendationEngine.js";
import { AnalysisEngine } from "./AnalysisEngine.js";
import { RuleEngine } from "./RuleEngine.js";
import { ScoreCalculator } from "./ScoreCalculator.js";
import { StatisticsCalculator } from "./StatisticsCalculator.js";
import { SummaryGenerator } from "./SummaryGenerator.js";

import { createRecommendationProviders } from "./RecommendationRegistry.js";
import { createRules } from "./RuleRegistry.js";

export class AnalysisEngineBuilder {

    build(): AnalysisEngine {

        return new AnalysisEngine(
            new RuleEngine(
                createRules()
            ),
            new RecommendationEngine(
                createRecommendationProviders()
            ),
            new RecommendationAggregator(),
            new ScoreCalculator(),
            new StatisticsCalculator(),
            new SummaryGenerator()
        );

    }

}
