import { PlatformSetupPlan } from "../models/PlatformSetupPlan.js";
import { SetupExecutionResult } from "./models/SetupExecutionResult.js";
import { ISetupExecutor } from "./contracts/ISetupExecutor.js";

import { InstallerEngine } from "../../installer/InstallerEngine.js";
import { InstallationContext } from "../../installer/InstallationContext.js";


export class SetupExecutor implements ISetupExecutor {


    public constructor(
        private readonly installer: InstallerEngine
    ) {}


    public async execute(
        plan: PlatformSetupPlan
    ): Promise<SetupExecutionResult> {


        const context: InstallationContext = {

            installPath: "./ackios",

            version: "1.0",

            platform:
                plan.operatingSystem,

            workspaceCreated: false,

            status: "pending"

        };


        const installation =
            await this.installer.install(context);


        return {

            success:
                installation.success,

            message:
                installation.message,

            installation

        };

    }


}
