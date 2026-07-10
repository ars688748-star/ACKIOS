import { BrainService } from "../services/BrainService.js";
import { IReasoningManager } from "../contracts/IReasoningManager.js";

export class ReasoningManager extends BrainService implements IReasoningManager {

    public readonly name = "ReasoningManager";

}
