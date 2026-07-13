import type { ArchitectureDecision } from "../decision/ArchitectureDecision.js";
import type { ArchitecturePlan } from "./ArchitecturePlan.js";

export class ArchitecturePlanningEngine {

    public createPlan(
        decision: ArchitectureDecision
    ): ArchitecturePlan {

        return {

            goal: decision.recommendation,

            steps: [

                "Analyze current architecture",

                "Apply architecture decision",

                "Run architecture verification",

                "Run project tests"

            ]

        };

    }

}
