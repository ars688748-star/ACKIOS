import { BrainService } from "../services/BrainService.js";
import { IExecutionManager } from "../contracts/IExecutionManager.js";

export class ExecutionManager extends BrainService implements IExecutionManager {

    public readonly name = "ExecutionManager";

}
