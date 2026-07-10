import { BrainService } from "../services/BrainService.js";
import { IKnowledgeManager } from "../contracts/IKnowledgeManager.js";

export class KnowledgeManager extends BrainService implements IKnowledgeManager {

    public readonly name = "KnowledgeManager";

}
