import { IssueCategory } from "./AnalysisIssue.js";

export type RecommendationPriority =
    | "low"
    | "medium"
    | "high";

export interface Recommendation {

    id: string;

    category: IssueCategory;

    title: string;

    description: string;

    priority: RecommendationPriority;

}
