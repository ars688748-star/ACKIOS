import { ArchitectureAnalysisEngine } from "./analysis/engine/ArchitectureAnalysisEngine.js";

import { ArchitectureDecisionEngine } from "./decision/ArchitectureDecisionEngine.js";
import { ArchitecturePlanningEngine } from "./planning/ArchitecturePlanningEngine.js";
import { ArchitectureExecutionPlanner } from "./execution/ArchitectureExecutionPlanner.js";
import { ArchitectureWorkflowEngine } from "./workflow/ArchitectureWorkflowEngine.js";
import { ArchitectureOrchestrator } from "./orchestrator/ArchitectureOrchestrator.js";

import type { ArchitectureAnalysisResult } from "./analysis/ArchitectureAnalysisResult.js";
import type { ArchitectureDecision } from "./decision/ArchitectureDecision.js";
import type { ArchitecturePlan } from "./planning/ArchitecturePlan.js";
import type { ArchitectureExecutionPlan } from "./execution/ArchitectureExecutionPlan.js";
import type { ArchitectureWorkflow } from "./workflow/ArchitectureWorkflow.js";

export class BrainFacade {

    private readonly analysis = new ArchitectureAnalysisEngine();

    private readonly decision = new ArchitectureDecisionEngine();

    private readonly planning = new ArchitecturePlanningEngine();

    private readonly execution = new ArchitectureExecutionPlanner();

    private readonly workflow = new ArchitectureWorkflowEngine();

    private readonly orchestrator = new ArchitectureOrchestrator();

    public analyze(input: string): ArchitectureAnalysisResult {

        return this.analysis.analyze(input);

    }

    public decide(input: string): ArchitectureDecision {

        return this.decision.decide(input);

    }

    public createPlan(
        decision: ArchitectureDecision
    ): ArchitecturePlan {

        return this.planning.createPlan(decision);

    }

    public createExecutionPlan(
        plan: ArchitecturePlan
    ): ArchitectureExecutionPlan {

        return this.execution.createExecutionPlan(plan);

    }

    public createWorkflow(
        execution: ArchitectureExecutionPlan
    ): ArchitectureWorkflow {

        return this.workflow.createWorkflow(execution);

    }

    public orchestrate(
        recommendation: string
    ): ArchitectureWorkflow {

        return this.orchestrator.orchestrate(recommendation);

    }

}
