import { IPlatformManager } from "./contracts/IPlatformManager.js";
import { PlatformInfo } from "./models/PlatformInfo.js";
import { Capability } from "./capabilities/models/Capability.js";

import { PlatformService } from "./PlatformService.js";

export class PlatformManager implements IPlatformManager {

    public constructor(

        private readonly platform =
            new PlatformService()

    ) {}

    public getInfo(): PlatformInfo {

        return this.platform.getInfo();

    }

    public getCapabilities(): Capability[] {

        return [];

    }

}
