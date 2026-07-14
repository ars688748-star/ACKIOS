import { BrainService } from "../services/BrainService.js";
import { IExecutionManager } from "../contracts/IExecutionManager.js";

import type { ArchitecturePlan } from "../planning/ArchitecturePlan.js";
import type { ArchitectureExecutionPlan } from "./ArchitectureExecutionPlan.js";

export class ExecutionManager extends BrainService implements IExecutionManager {

    public readonly name = "ExecutionManager";

    public createExecutionPlan(
        plan: ArchitecturePlan
    ): ArchitectureExecutionPlan {

        return {

            goal: plan.goal,

            actions: [

                "Create backup",

                "Apply architecture changes",

                "Build project",

                "Run tests",

                "Run verify",

                "Commit changes"

            ]

        };

    }

}
