import { BrainService } from "../services/BrainService.js";
import { ILearningManager } from "../contracts/ILearningManager.js";

export class LearningManager extends BrainService implements ILearningManager {

    public readonly name = "LearningManager";

}
