import type { ArchitectureDecision } from "../decision/ArchitectureDecision.js";

export interface IDecisionManager {

    decide(input: string): ArchitectureDecision;

}



