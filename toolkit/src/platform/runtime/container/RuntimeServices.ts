import { IPlatformRuntime } from "../IPlatformRuntime.js";
import { RuntimeStateManager } from "../state/RuntimeStateManager.js";
import { RuntimeEventBus } from "../events/RuntimeEventBus.js";
import { RuntimeRecoveryCoordinator } from "../recovery/RuntimeRecoveryCoordinator.js";


export interface RuntimeServices {

    platformRuntime: IPlatformRuntime;

    stateManager: RuntimeStateManager;

    eventBus: RuntimeEventBus;

    recoveryCoordinator:
        RuntimeRecoveryCoordinator;

}

