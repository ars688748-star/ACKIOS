import { IRuntimeLifecycleCoordinator } from "./IRuntimeLifecycleCoordinator.js";
import { RuntimeLifecycleResult } from "./RuntimeLifecycleResult.js";
import { PlatformRuntime } from "../PlatformRuntime.js";
import { PlatformRuntimeContext } from "../PlatformRuntimeContext.js";
import { RuntimeStateManager } from "../state/RuntimeStateManager.js";


export class RuntimeLifecycleCoordinator
    implements IRuntimeLifecycleCoordinator {


    public constructor(
        private readonly platformRuntime: PlatformRuntime,
        private readonly stateManager: RuntimeStateManager
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


        await this.stateManager.save({

            initialized: true,

            installed: context.installed,

            workspaceReady: context.ready,

            ready: context.ready,

            lastStartTime:
                new Date().toISOString()

        });


        return {

            success: true,

            initialized: true,

            message: "Runtime started successfully"

        };

    }


}
