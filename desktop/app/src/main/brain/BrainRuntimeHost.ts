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

    public getState(){

        const state =
            this.process.getState();

        return {

            initialized:
                state !== 0,

            running:
                state === 2,

            process:
                state

        };

    }

    public getRuntime(){

        return {

            state: this.getState(),

            modules: [

                "Brain Runtime",
                "Workspace",
                "Knowledge",
                "Memory"

            ],

            events: [],

            tasks: [],

            health: {

                healthy: true

            }

        };

    }

}
