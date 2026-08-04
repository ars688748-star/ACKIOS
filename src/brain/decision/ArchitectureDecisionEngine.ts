import { ReasoningEngine } from "../reasoning/ReasoningEngine.js";
import type { ArchitectureDecision } from "./ArchitectureDecision.js";

export class ArchitectureDecisionEngine {

    private readonly reasoning = new ReasoningEngine();

    public decide(
        recommendation: string
    ): ArchitectureDecision {

        const result = this.reasoning.explain(recommendation);

        return {

            recommendation,

            confidence: result.confidence,

            reasoning: result.steps.map(step => step.explanation)

        };

    }

}
