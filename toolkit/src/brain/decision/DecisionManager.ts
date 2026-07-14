import { BrainService } from "../services/BrainService.js";
import { IDecisionManager } from "../contracts/IDecisionManager.js";
import { ArchitectureDecisionEngine } from "./ArchitectureDecisionEngine.js";
import type { ArchitectureDecision } from "./ArchitectureDecision.js";

export class DecisionManager extends BrainService implements IDecisionManager {

    public readonly name = "DecisionManager";

    private readonly engine = new ArchitectureDecisionEngine();

    public decide(input: string): ArchitectureDecision {

        return this.engine.decide(input);

    }

}
