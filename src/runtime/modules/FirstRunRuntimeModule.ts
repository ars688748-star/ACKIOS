import { ACKIOSContext } from "../ACKIOSContext.js";
import { IRuntimeModule } from "../IRuntimeModule.js";
import { FirstRunCoordinator } from "../../platform/runtime/FirstRunCoordinator.js";


export class FirstRunRuntimeModule implements IRuntimeModule {


    private coordinator!: FirstRunCoordinator;


    public async initialize(
        context: ACKIOSContext
    ): Promise<void> {


        this.coordinator =
            context.services.resolve<FirstRunCoordinator>(
                "firstRunCoordinator"
            );

    }


    public async start(): Promise<void> {


        await this.coordinator.run(
            "./workspace",
            "user"
        );

    }


    public async stop(): Promise<void> {}


    public async dispose(): Promise<void> {}


}
