import { ExecutionManager } from "./ExecutionManager.js";

import type { ArchitecturePlan } from "../planning/ArchitecturePlan.js";
import type { ArchitectureExecutionPlan } from "./ArchitectureExecutionPlan.js";

export class ArchitectureExecutionPlanner {

    private readonly manager = new ExecutionManager();

    public createExecutionPlan(
        plan: ArchitecturePlan
    ): ArchitectureExecutionPlan {

        return this.manager.createExecutionPlan(plan);

    }

}
