import { BrainService } from "../services/BrainService.js";
import { IReflectionManager } from "../contracts/IReflectionManager.js";

export class ReflectionManager extends BrainService implements IReflectionManager {

    public readonly name = "ReflectionManager";

}
