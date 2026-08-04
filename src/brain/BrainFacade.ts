import { ArchitectureReasoningEngine } from "./analysis/engine/ArchitectureReasoningEngine.js";
import { ArchitectureOrchestrator } from "./orchestrator/ArchitectureOrchestrator.js";

import type { ArchitectureAnalysisResult } from "./analysis/ArchitectureAnalysisResult.js";
import type { ArchitectureWorkflow } from "./workflow/ArchitectureWorkflow.js";

export class BrainFacade {

    private readonly analysis =
        new ArchitectureReasoningEngine();

    private readonly orchestrator =
        new ArchitectureOrchestrator();

    public analyze(
        input: string
    ): ArchitectureAnalysisResult {

        return this.analysis.analyze(input);

    }

    public orchestrate(
        recommendation: string
    ): ArchitectureWorkflow {

        return this.orchestrator.orchestrate(
            recommendation
        );

    }

}
