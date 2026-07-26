import { IRuntimeLifecycleCoordinator } from "./IRuntimeLifecycleCoordinator.js";
import { RuntimeLifecycleResult } from "./RuntimeLifecycleResult.js";
import { PlatformRuntime } from "../PlatformRuntime.js";
import { PlatformRuntimeContext } from "../PlatformRuntimeContext.js";


export class RuntimeLifecycleCoordinator
    implements IRuntimeLifecycleCoordinator {


    public constructor(
        private readonly platformRuntime: PlatformRuntime
    ) {}


    public async start(
        context: PlatformRuntimeContext
    ): Promise<RuntimeLifecycleResult> {


        const started =
            await this.platformRuntime.start(
                context
            );


        if (!started) {

            return {

                success: false,

                initialized: false,

                message: "Platform runtime failed to start"

            };

        }


        return {

            success: true,

            initialized: true,

            message: "Runtime started successfully"

        };

    }


}
