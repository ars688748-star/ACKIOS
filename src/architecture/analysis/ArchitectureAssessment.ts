import { ArchitectureInspectionResult } from "../../inspector/models/ArchitectureInspectionResult.js";
import { ArchitectureScore } from "../score/ArchitectureScore.js";

export interface ArchitectureAssessment{

    inspection:ArchitectureInspectionResult;

    score:ArchitectureScore;

}

