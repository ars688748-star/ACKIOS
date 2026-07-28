import { IPlatformManager } from "./contracts/IPlatformManager.js";
import { PlatformHealthStatus } from "./contracts/PlatformHealthStatus.js";
import { PlatformInfo } from "./models/PlatformInfo.js";
import { Capability } from "./capabilities/models/Capability.js";

import { PlatformService } from "./PlatformService.js";

import { PlatformRegistryService } from "./lifecycle/services/PlatformRegistryService.js";
import { PlatformLifecycleService } from "./lifecycle/services/PlatformLifecycleService.js";
import { PlatformRegistrationService } from "./registration/PlatformRegistrationService.js";

import { BrainIntegration } from "./integration/BrainIntegration.js";

export class PlatformManager implements IPlatformManager {

    private readonly platform = new PlatformService();

    public readonly registry =
        new PlatformRegistryService();

    public readonly lifecycle =
        new PlatformLifecycleService();

    public readonly registration =
        new PlatformRegistrationService(
            this.registry
        );

    public readonly brain =
        BrainIntegration.createDefault();

    public async initialize(): Promise<void> {

        this.registration.registerCore();

        await this.brain.initialize();

    }

    public async start(): Promise<void> {

        await this.brain.start();

    }

    public async stop(): Promise<void> {

        await this.brain.stop();

    }

    public async restart(): Promise<void> {

        await this.stop();

        await this.start();

    }

    public async health(): Promise<PlatformHealthStatus> {

        return PlatformHealthStatus.Healthy;

    }

    public getInfo(): PlatformInfo {

        return this.platform.getInfo();

    }

    public getCapabilities(): Capability[] {

        return [];

    }

}
