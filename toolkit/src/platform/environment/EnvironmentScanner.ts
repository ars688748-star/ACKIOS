import { IEnvironmentScanner } from "../contracts/IEnvironmentScanner.js";
import { EnvironmentProfile } from "../models/EnvironmentProfile.js";

import { IPlatformDetector } from "../contracts/IPlatformDetector.js";
import { IHardwareDetector } from "../hardware/contracts/IHardwareDetector.js";

import { ToolDiscoveryService } from "../tools/ToolDiscoveryService.js";
import { CapabilityDiscoveryService } from "../capabilities/CapabilityDiscoveryService.js";


export class EnvironmentScanner implements IEnvironmentScanner {


    public constructor(

        private readonly platformDetector: IPlatformDetector,

        private readonly hardwareDetector: IHardwareDetector,

        private readonly toolDiscovery: ToolDiscoveryService,

        private readonly capabilityDiscovery: CapabilityDiscoveryService

    ) {}


    public async scan(): Promise<EnvironmentProfile> {


        const platform =
            await this.platformDetector.detect();


        const hardware =
            await this.hardwareDetector.detect();


        const tools =
            await this.toolDiscovery.detectAll();


        const capabilities =
            await this.capabilityDiscovery.getCapabilities();


        return {


            platform,


            hardware,


            tools:

                tools
                    .filter(tool => tool.available)
                    .map(tool => tool.name),


            capabilities:

                capabilities
                    .filter(capability => capability.available)
                    .map(capability => capability.name)

        };


    }


}


