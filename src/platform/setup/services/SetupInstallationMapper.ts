import { PlatformSetupPlan } from "../models/PlatformSetupPlan.js";
import { InstallationContext } from "../../installer/InstallationContext.js";


export class SetupInstallationMapper {


    public map(
        plan: PlatformSetupPlan
    ): InstallationContext {


        return {

            installPath: "./ackios",

            version: "1.0",

            platform: plan.operatingSystem,

            strategy: plan.strategy,

            components: plan.components,

            warnings: plan.warnings,

            workspaceCreated: false,

            status: "pending"

        };

    }

}
