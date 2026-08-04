import type { ArchitectureExecutionPlan } from "../execution/ArchitectureExecutionPlan.js";
import type { ArchitectureWorkflow } from "./ArchitectureWorkflow.js";

export class ArchitectureWorkflowEngine {

    public createWorkflow(
        plan: ArchitectureExecutionPlan
    ): ArchitectureWorkflow {

        return {

            name: plan.goal,

            steps: plan.actions

        };

    }

}
