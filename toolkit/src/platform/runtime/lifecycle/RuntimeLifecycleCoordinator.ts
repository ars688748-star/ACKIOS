import { IRuntimeLifecycleCoordinator } from "./IRuntimeLifecycleCoordinator.js";
import { RuntimeLifecycleResult } from "./RuntimeLifecycleResult.js";
import { PlatformRuntime } from "../PlatformRuntime.js";
import { PlatformRuntimeContext } from "../PlatformRuntimeContext.js";
import { RuntimeStateManager } from "../state/RuntimeStateManager.js";
import { RuntimeEventBus } from "../events/RuntimeEventBus.js";
import { RuntimeLifecycleTransitionEngine } from "./RuntimeLifecycleTransitionEngine.js";


export class RuntimeLifecycleCoordinator
    implements IRuntimeLifecycleCoordinator {


    public constructor(
        private readonly platformRuntime: PlatformRuntime,
        private readonly stateManager: RuntimeStateManager,
        private readonly eventBus: RuntimeEventBus,
        private readonly transitionEngine: RuntimeLifecycleTransitionEngine
    ) {}


    public async start(
        context: PlatformRuntimeContext
    ): Promise<RuntimeLifecycleResult> {


        const started =
            await this.platformRuntime.start(
                context
            );


        if (!started) {

            await this.eventBus.publish({

                type: "runtime.failed",

                timestamp:
                    new Date().toISOString()

            });


            return {

                success: false,

                initialized: false,

                message: "Platform runtime failed to start"

            };

        }


        const nextStage =
            this.transitionEngine.transition(
                "created",
                "installed"
            );


        await this.stateManager.save({

            initialized:
                true,

            installed:
                context.installed,

            workspaceReady:
                context.ready,

            ready:
                context.ready,

            stage:
                nextStage,

            lastStartTime:
                new Date().toISOString()

        });


        await this.eventBus.publish({

            type: "runtime.started",

            timestamp:
                new Date().toISOString()

        });


        await this.eventBus.publish({

            type: "runtime.initialized",

            timestamp:
                new Date().toISOString()

        });


        return {

            success: true,

            initialized: true,

            message: "Runtime started successfully"

        };

    }


}

