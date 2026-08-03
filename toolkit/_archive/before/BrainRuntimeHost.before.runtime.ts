import { BrainProcessHost } from "../process/BrainProcessHost.js";

export class BrainRuntimeHost {

    private readonly process =
        new BrainProcessHost();

    public async initialize(): Promise<void> {

        await this.process.initialize();

    }

    public async start(): Promise<void> {

        await this.process.start();

    }

    public async stop(): Promise<void> {

        await this.process.stop();

    }

    public getState() {

        return this.process.getState();

    }

}
