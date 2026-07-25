import { EnvironmentScore } from "./EnvironmentScore.js";
import { EnvironmentRecommendation } from "./EnvironmentRecommendation.js";


export interface EnvironmentAnalysis {

    score: EnvironmentScore;

    recommendation: EnvironmentRecommendation;

}
