import { BrainSystem } from "../../brain/integration/BrainSystem.js";
import { BrainSystemBuilder } from "../../brain/integration/BrainSystemBuilder.js";
import { IRuntimeModule } from "../IRuntimeModule.js";

export class BrainModule implements IRuntimeModule {

    private readonly brain: BrainSystem =
        new BrainSystemBuilder().build();

    public async initialize(): Promise<void> {

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
