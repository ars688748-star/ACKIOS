import { RecommendationCategory } from "./RecommendationCategory.js";
import { RecommendationPriority } from "./RecommendationPriority.js";

export interface Recommendation {

    id: string;

    title: string;

    description: string;

    category: RecommendationCategory;

    priority: RecommendationPriority;

}
