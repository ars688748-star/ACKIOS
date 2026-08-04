import { RuntimeLifecycleResult } from "./RuntimeLifecycleResult.js";
import { PlatformRuntimeContext } from "../PlatformRuntimeContext.js";


export interface IRuntimeLifecycleCoordinator {

    start(
        context: PlatformRuntimeContext
    ): Promise<RuntimeLifecycleResult>;

}
