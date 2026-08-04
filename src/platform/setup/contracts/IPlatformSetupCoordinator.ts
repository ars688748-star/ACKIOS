import { EnvironmentProfile } from "../../models/EnvironmentProfile.js";
import { PlatformSetupPlan } from "../models/PlatformSetupPlan.js";


export interface IPlatformSetupCoordinator {

    createPlan(
        profile: EnvironmentProfile
    ): Promise<PlatformSetupPlan>;

}
