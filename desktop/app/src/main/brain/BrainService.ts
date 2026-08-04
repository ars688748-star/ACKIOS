export interface BrainState {

    initialized: boolean;

    running: boolean;

}

export class BrainService {

    private initialized = false;

    private running = false;

    public async initialize(): Promise<void> {

        this.initialized = true;

    }

    public async start(): Promise<void> {

        this.running = true;

    }

    public async stop(): Promise<void> {

        this.running = false;

    }

    public getState(): BrainState {

        return {

            initialized: this.initialized,

            running: this.running

        };

    }

}
