import { PlanningManager } from "./PlanningManager.js";

import type { ArchitectureDecision } from "../decision/ArchitectureDecision.js";
import type { ArchitecturePlan } from "./ArchitecturePlan.js";

export class ArchitecturePlanningEngine {

    private readonly manager = new PlanningManager();

    public createPlan(
        decision: ArchitectureDecision
    ): ArchitecturePlan {

        return this.manager.createPlan(decision);

    }

}
