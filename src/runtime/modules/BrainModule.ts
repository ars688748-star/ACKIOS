import { BrainSystem } from "../../brain/integration/BrainSystem.js";
import { IRuntimeModule } from "../IRuntimeModule.js";
import { ACKIOSContext } from "../ACKIOSContext.js";

export class BrainModule implements IRuntimeModule {

    private brain!: BrainSystem;

    public async initialize(context: ACKIOSContext): Promise<void> {

        this.brain = context.services.resolve<BrainSystem>("brainSystem");
        await this.brain.initialize();

    }

    public async start(): Promise<void> {

        await this.brain.start();

    }

    public async stop(): Promise<void> {

        await this.brain.stop();

    }

    public async dispose(): Promise<void> {

        await this.brain.dispose();

    }

}
