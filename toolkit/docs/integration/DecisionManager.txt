import { BrainService } from "../services/BrainService.js";
import { IDecisionManager } from "../contracts/IDecisionManager.js";

export class DecisionManager extends BrainService implements IDecisionManager {

    public readonly name = "DecisionManager";

}
