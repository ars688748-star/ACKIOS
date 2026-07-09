import { AnalysisIssue } from "./AnalysisIssue.js";
import { Recommendation } from "./Recommendation.js";
import { RecommendationGroup } from "./RecommendationGroup.js";

export interface AnalysisStatistics {

    issues: number;

    recommendations: number;

    groups: number;

    errors: number;

    warnings: number;

    infos: number;

}

export interface AnalysisReport {

    score: number;

    categoryScores: Record<string, number>;

    issues: AnalysisIssue[];

    recommendations: Recommendation[];

    recommendationGroups: RecommendationGroup[];

    statistics: AnalysisStatistics;

    summary: string;

}
