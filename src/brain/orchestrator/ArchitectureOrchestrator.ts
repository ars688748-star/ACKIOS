import { ArchitectureDecisionEngine } from "../decision/ArchitectureDecisionEngine.js";
import { ArchitecturePlanningEngine } from "../planning/ArchitecturePlanningEngine.js";
import { ArchitectureExecutionPlanner } from "../execution/ArchitectureExecutionPlanner.js";
import { ArchitectureWorkflowEngine } from "../workflow/ArchitectureWorkflowEngine.js";

import type { ArchitectureWorkflow } from "../workflow/ArchitectureWorkflow.js";

export class ArchitectureOrchestrator {

    private readonly decision = new ArchitectureDecisionEngine();

    private readonly planning = new ArchitecturePlanningEngine();

    private readonly execution = new ArchitectureExecutionPlanner();

    private readonly workflow = new ArchitectureWorkflowEngine();

    public orchestrate(
        recommendation: string
    ): ArchitectureWorkflow {

        const decision = this.decision.decide(
            recommendation
        );

        const plan = this.planning.createPlan(
            decision
        );

        const execution = this.execution.createExecutionPlan(
            plan
        );

        return this.workflow.createWorkflow(
            execution
        );

    }

}
