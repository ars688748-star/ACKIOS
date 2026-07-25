import { PlatformSetupPlan } from "../../models/PlatformSetupPlan.js";
import { SetupExecutionResult } from "../models/SetupExecutionResult.js";

export interface ISetupExecutor {

    execute(
        plan: PlatformSetupPlan
    ): Promise<SetupExecutionResult>;

}
