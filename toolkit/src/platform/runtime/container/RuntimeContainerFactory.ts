import { RuntimeContainer } from "./RuntimeContainer.js";
import { RuntimeServices } from "./RuntimeServices.js";
import { RuntimeEventBus } from "../events/RuntimeEventBus.js";
import { RuntimeStateManager } from "../state/RuntimeStateManager.js";
import { MemoryRuntimeStateStorage } from "../state/MemoryRuntimeStateStorage.js";
import { IPlatformRuntime } from "../IPlatformRuntime.js";
import { RuntimeRecoveryManager } from "../recovery/RuntimeRecoveryManager.js";
import { RuntimeRecoveryExecutor } from "../recovery/RuntimeRecoveryExecutor.js";
import { RuntimeRecoveryService } from "../recovery/RuntimeRecoveryService.js";
import { RuntimeRecoveryCoordinator } from "../recovery/RuntimeRecoveryCoordinator.js";


export class RuntimeContainerFactory {


    public static create(
        services?: RuntimeServices
    ): RuntimeContainer {


        if (services) {

            return new RuntimeContainer(
                services
            );

        }


        const stateStorage =
            new MemoryRuntimeStateStorage();


        const stateManager =
            new RuntimeStateManager(
                stateStorage
            );


        const eventBus =
            new RuntimeEventBus();


        const recoveryManager =
            new RuntimeRecoveryManager();


        const recoveryExecutor =
            new RuntimeRecoveryExecutor();


        const recoveryService =
            new RuntimeRecoveryService(
                stateManager,
                recoveryManager,
                recoveryExecutor
            );


        const recoveryCoordinator =
            new RuntimeRecoveryCoordinator(
                recoveryService
            );


        const platformRuntime =
        {
            start:
                async () => true
        } as IPlatformRuntime;


        return new RuntimeContainer({

            platformRuntime,

            stateManager,

            eventBus,

            recoveryCoordinator

        });

    }


}



