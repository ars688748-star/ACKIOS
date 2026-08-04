import { BrainService } from "../services/BrainService.js";
import { ITelemetryManager } from "../contracts/ITelemetryManager.js";

export class TelemetryManager extends BrainService implements ITelemetryManager {

    public readonly name = "TelemetryManager";

}
