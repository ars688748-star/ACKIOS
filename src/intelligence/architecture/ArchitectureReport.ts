import { ArchitectureLayer } from "./ArchitectureLayer.js";
import { ArchitectureRecommendation } from "./ArchitectureRecommendation.js";
import { ArchitectureType } from "./ArchitectureType.js";

export interface ArchitectureReport {

    architecture: ArchitectureType;

    layers: ArchitectureLayer[];

    hasTests: boolean;

    hasLint: boolean;

    hasFormatter: boolean;

    score: number;

    recommendations: ArchitectureRecommendation[];

}
