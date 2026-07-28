import { PlatformRegistryService } from "../lifecycle/services/index.js";
import { PlatformComponentType } from "../lifecycle/models/index.js";
import { PlatformLifecycleState } from "../lifecycle/models/index.js";

export class PlatformRegistrationService {

    constructor(
        private readonly registry: PlatformRegistryService
    ) {}

    registerCore(): void {

        this.registry.register({
            id: "ackios-core",
            name: "ACKIOS Core",
            type: PlatformComponentType.Core,
            state: PlatformLifecycleState.Healthy,
            enabled: true
        });

    }

}
