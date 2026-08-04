import { ArchitectureAnalysisResult } from "../analysis/ArchitectureAnalysisResult.js";

export interface IReasoningManager {

    analyze(input: string): ArchitectureAnalysisResult;

}



