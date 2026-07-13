import { ArchitectureAnalysisEngine } from "./analysis/engine/ArchitectureAnalysisEngine.js";
import type { ArchitectureAnalysisResult } from "./analysis/ArchitectureAnalysisResult.js";

export class BrainFacade {

    private readonly analysis =
        new ArchitectureAnalysisEngine();

    public analyze(
        input: string
    ): ArchitectureAnalysisResult {

        return this.analysis.analyze(input);

    }

}
