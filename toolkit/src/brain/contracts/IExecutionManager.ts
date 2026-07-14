import type { ArchitecturePlan } from "../planning/ArchitecturePlan.js";
import type { ArchitectureExecutionPlan } from "../execution/ArchitectureExecutionPlan.js";

export interface IExecutionManager {

    createExecutionPlan(
        plan: ArchitecturePlan
    ): ArchitectureExecutionPlan;

}
