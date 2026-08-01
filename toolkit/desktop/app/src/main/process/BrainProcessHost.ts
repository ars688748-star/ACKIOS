import { BrainProcessState } from "./BrainProcessState.js";

export class BrainProcessHost {

    private state =
        BrainProcessState.Created;

    public async initialize(): Promise<void> {

        this.state =
            BrainProcessState.Initializing;

    }

    public async start(): Promise<void> {

        this.state =
            BrainProcessState.Running;

    }

    public async stop(): Promise<void> {

        this.state =
            BrainProcessState.Stopped;

    }

    public getState(): BrainProcessState {

        return this.state;

    }

}
