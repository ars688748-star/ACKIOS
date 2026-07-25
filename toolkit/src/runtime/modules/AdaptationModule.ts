import { IRuntimeModule } from "../IRuntimeModule.js";
import { ACKIOSContext } from "../ACKIOSContext.js";
import { AdaptationRuntime } from "../../platform/adaptation/runtime/AdaptationRuntime.js";

export class AdaptationModule implements IRuntimeModule {


    private adaptationRuntime!: AdaptationRuntime;


    public async initialize(
        context: ACKIOSContext
    ): Promise<void> {

        this.adaptationRuntime =
            context.services.resolve<AdaptationRuntime>(
                "adaptationRuntime"
            );

    }


    public async start(): Promise<void> {

        await this.adaptationRuntime.getStrategy();

    }


    public async stop(): Promise<void> {}


    public async dispose(): Promise<void> {}


}
