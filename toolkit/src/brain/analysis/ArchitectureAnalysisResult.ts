import { ArchitectureDecision } from "../decision/ArchitectureDecision.js";
import { ArchitecturePlan } from "../planning/ArchitecturePlan.js";
import { ArchitectureExecutionPlan } from "../execution/ArchitectureExecutionPlan.js";
import { ArchitectureWorkflow } from "../workflow/ArchitectureWorkflow.js";

export interface ArchitectureAnalysisResult {

    readonly decision: ArchitectureDecision;

    readonly plan: ArchitecturePlan;

    readonly execution: ArchitectureExecutionPlan;

    readonly workflow: ArchitectureWorkflow;

    readonly summary: string;

    readonly score: number;

}
