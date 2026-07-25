import { EnvironmentProfile } from "../models/EnvironmentProfile.js";
import { PlatformSetupPlan } from "./models/PlatformSetupPlan.js";
import { IPlatformSetupCoordinator } from "./contracts/IPlatformSetupCoordinator.js";


export class PlatformSetupCoordinator implements IPlatformSetupCoordinator {


    public async createPlan(
        profile: EnvironmentProfile
    ): Promise<PlatformSetupPlan> {


        return {

            operatingSystem:
                profile.platform.operatingSystem,

            strategy:
                "adaptive",

            components: [

                "runtime",
                "tools"

            ],

            warnings: []

        };

    }

}
