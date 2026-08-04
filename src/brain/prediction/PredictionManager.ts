import { BrainService } from "../services/BrainService.js";
import { IPredictionManager } from "../contracts/IPredictionManager.js";

export class PredictionManager extends BrainService implements IPredictionManager {

    public readonly name = "PredictionManager";

}
