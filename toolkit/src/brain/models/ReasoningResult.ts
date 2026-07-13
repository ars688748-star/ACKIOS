import { ReasoningStep } from "../models/ReasoningStep.js";

export interface ReasoningResult {

    conclusion: string;

    confidence: number;

    steps: readonly ReasoningStep[];

}
