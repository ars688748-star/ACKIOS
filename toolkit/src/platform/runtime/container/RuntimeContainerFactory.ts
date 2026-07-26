import { RuntimeContainer } from "./RuntimeContainer.js";
import { RuntimeServices } from "./RuntimeServices.js";
import { RuntimeEventBus } from "../events/RuntimeEventBus.js";
import { RuntimeStateManager } from "../state/RuntimeStateManager.js";
import { MemoryRuntimeStateStorage } from "../state/MemoryRuntimeStateStorage.js";


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



        const defaultServices =
        {

            platformRuntime:
                {} as any,


            stateManager,


            eventBus

        };



        return new RuntimeContainer(
            defaultServices
        );

    }


}
