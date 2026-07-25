import { InstallationResult } from "../../../installer/InstallationResult.js";

export interface SetupExecutionResult {

    success: boolean;

    message: string;

    installation: InstallationResult;

}
