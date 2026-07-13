import type { ArchitecturePlan } from "../planning/ArchitecturePlan.js";
import type { ArchitectureExecutionPlan } from "./ArchitectureExecutionPlan.js";

export class ArchitectureExecutionPlanner {

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
