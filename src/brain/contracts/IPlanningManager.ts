import type { ArchitectureDecision } from "../decision/ArchitectureDecision.js";
import type { ArchitecturePlan } from "../planning/ArchitecturePlan.js";

export interface IPlanningManager {

    createPlan(
        decision: ArchitectureDecision
    ): ArchitecturePlan;

}



