import { BrainService } from "../services/BrainService.js";
import { IToolManager } from "../contracts/IToolManager.js";

export class ToolManager extends BrainService implements IToolManager {

    public readonly name = "ToolManager";

}
