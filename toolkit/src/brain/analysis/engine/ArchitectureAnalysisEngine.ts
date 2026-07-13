import { ArchitectureAnalysisResult } from "../ArchitectureAnalysisResult.js";

import { ArchitectureDecisionEngine } from "../../decision/ArchitectureDecisionEngine.js";
import { ArchitecturePlanningEngine } from "../../planning/ArchitecturePlanningEngine.js";
import { ArchitectureExecutionPlanner } from "../../execution/ArchitectureExecutionPlanner.js";
import { ArchitectureWorkflowEngine } from "../../workflow/ArchitectureWorkflowEngine.js";

export class ArchitectureAnalysisEngine {

    private readonly decisionEngine =
        new ArchitectureDecisionEngine();

    private readonly planningEngine =
        new ArchitecturePlanningEngine();

    private readonly executionPlanner =
        new ArchitectureExecutionPlanner();

    private readonly workflowEngine =
        new ArchitectureWorkflowEngine();

    public analyze(
        input: string
    ): ArchitectureAnalysisResult {

        const decision =
            this.decisionEngine.decide(input);

        const plan =
            this.planningEngine.createPlan(decision);

        const execution =
            this.executionPlanner.createExecutionPlan(plan);

        const workflow =
            this.workflowEngine.createWorkflow(execution);

        return {

            decision,

            plan,

            execution,

            workflow,

            summary:
                "Architecture analysis completed.",

            score:
                decision.confidence

        };

    }

}
