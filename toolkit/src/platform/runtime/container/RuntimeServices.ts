import { PlatformRuntime } from "../PlatformRuntime.js";
import { RuntimeStateManager } from "../state/RuntimeStateManager.js";
import { RuntimeEventBus } from "../events/RuntimeEventBus.js";


export interface RuntimeServices {

    platformRuntime: PlatformRuntime;

    stateManager: RuntimeStateManager;

    eventBus: RuntimeEventBus;

}
