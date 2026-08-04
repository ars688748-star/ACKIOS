import { BrainService } from "../services/BrainService.js";
import { IReasoningManager } from "../contracts/IReasoningManager.js";

import { DecisionManager } from "../decision/DecisionManager.js";
import { PlanningManager } from "../planning/PlanningManager.js";
import { ExecutionManager } from "../execution/ExecutionManager.js";
import { ArchitectureWorkflowEngine } from "../workflow/ArchitectureWorkflowEngine.js";

import type { ArchitectureAnalysisResult } from "../analysis/ArchitectureAnalysisResult.js";

export class ReasoningManager extends BrainService implements IReasoningManager {

    public readonly name = "ReasoningManager";

    private readonly decision = new DecisionManager();
    private readonly planning = new PlanningManager();
    private readonly execution = new ExecutionManager();
    private readonly workflow = new ArchitectureWorkflowEngine();

    public analyze(input: string): ArchitectureAnalysisResult {

        const decision = this.decision.decide(input);

        const plan = this.planning.createPlan(decision);

        const execution = this.execution.createExecutionPlan(plan);

        const workflow = this.workflow.createWorkflow(execution);

        return {

            decision,

            plan,

            execution,

            workflow,

            summary: "Architecture analysis completed.",

            score: decision.confidence

        };

    }

}
