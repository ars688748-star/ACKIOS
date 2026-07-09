import { Recommendation } from "./Recommendation.js";

export interface RecommendationGroup {

    id: string;

    title: string;

    priority: Recommendation["priority"];

    recommendations: Recommendation[];

}
