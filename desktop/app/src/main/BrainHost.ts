import { BrainRuntimeHost } from "./brain/BrainRuntimeHost.js";

export class BrainHost {

    private readonly runtime =
        new BrainRuntimeHost();

    public async initialize(): Promise<void> {

        await this.runtime.initialize();

    }

    public async start(): Promise<void> {

        await this.runtime.start();

    }

    public async stop(): Promise<void> {

        await this.runtime.stop();

    }

    public getState(){

        return this.runtime.getState();

    }

    public getRuntime(){

        return this.runtime.getRuntime();

    }

}

