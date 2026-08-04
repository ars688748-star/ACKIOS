import { ProjectIntelligenceReport } from "./intelligence/index.js";
import { RecommendationReport } from "./recommendations/index.js";

export interface StudioReport {

    intelligence: ProjectIntelligenceReport;

    recommendations: RecommendationReport;

}
