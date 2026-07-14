import { BrainService } from "../services/BrainService.js";
import { IPlanningManager } from "../contracts/IPlanningManager.js";

import type { ArchitectureDecision } from "../decision/ArchitectureDecision.js";
import type { ArchitecturePlan } from "./ArchitecturePlan.js";

export class PlanningManager extends BrainService implements IPlanningManager {

    public readonly name = "PlanningManager";

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
