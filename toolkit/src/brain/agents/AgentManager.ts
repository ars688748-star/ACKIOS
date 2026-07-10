import { BrainService } from "../services/BrainService.js";
import { IAgentManager } from "../contracts/IAgentManager.js";

export class AgentManager extends BrainService implements IAgentManager {

    public readonly name = "AgentManager";

}
