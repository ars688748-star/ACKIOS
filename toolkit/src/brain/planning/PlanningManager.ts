import { BrainService } from "../services/BrainService.js";
import { IPlanningManager } from "../contracts/IPlanningManager.js";

export class PlanningManager extends BrainService implements IPlanningManager {

    public readonly name = "PlanningManager";

}
