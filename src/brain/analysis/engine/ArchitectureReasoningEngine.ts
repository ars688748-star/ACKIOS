import { ReasoningManager } from "../../reasoning/ReasoningManager.js";
import type { ArchitectureAnalysisResult } from "../ArchitectureAnalysisResult.js";

export class ArchitectureReasoningEngine {

    private readonly manager = new ReasoningManager();

    public analyze(input: string): ArchitectureAnalysisResult {

        return this.manager.analyze(input);

    }

}
