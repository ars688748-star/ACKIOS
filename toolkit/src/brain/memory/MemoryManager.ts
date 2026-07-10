import { BrainService } from "../services/BrainService.js";
import { IMemoryManager } from "../contracts/IMemoryManager.js";

export class MemoryManager extends BrainService implements IMemoryManager {

    public readonly name = "MemoryManager";

}
