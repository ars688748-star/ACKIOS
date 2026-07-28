import { ACKIOSContext } from "./ACKIOSContext.js";
import { IRuntimeModule } from "./IRuntimeModule.js";

import { IRuntimeLifecycle } from "./lifecycle/IRuntimeLifecycle.js";
import { RuntimeState } from "./lifecycle/RuntimeState.js";
import { RuntimeStatus } from "./lifecycle/RuntimeStatus.js";

export class ACKIOSRuntime implements IRuntimeLifecycle {

    private status: RuntimeStatus = {
        state: RuntimeState.Created
    };

    public constructor(
        public readonly context: ACKIOSContext,
        public readonly modules: IRuntimeModule[]
    ) {}

    public getStatus(): RuntimeStatus {

        return this.status;

    }

    public getService<T>(name: string): T {

        return this.context.services.resolve<T>(name);

    }

    public hasService(name: string): boolean {

        return this.context.services.has(name);

    }

    public async initialize(): Promise<void> {

        this.status = {
            ...this.status,
            state: RuntimeState.Initializing
        };

        try {

            for (const module of this.modules)
                await module.initialize(this.context);

            this.status = {
                ...this.status,
                state: RuntimeState.Initialized
            };

        }
        catch (error) {

            this.status = {
                ...this.status,
                state: RuntimeState.Faulted,
                error: error instanceof Error ? error : new Error(String(error))
            };

            throw error;

        }

    }

    public async start(): Promise<void> {

        this.status = {
            ...this.status,
            state: RuntimeState.Starting
        };

        try {

            for (const module of this.modules)
                await module.start();

            this.status = {
                ...this.status,
                state: RuntimeState.Running,
                startedAt: new Date()
            };

        }
        catch (error) {

            this.status = {
                ...this.status,
                state: RuntimeState.Faulted,
                error: error instanceof Error ? error : new Error(String(error))
            };

            throw error;

        }

    }

    public async stop(): Promise<void> {

        this.status = {
            ...this.status,
            state: RuntimeState.Stopping
        };

        try {

            for (const module of [...this.modules].reverse())
                await module.stop();

            this.status = {
                ...this.status,
                state: RuntimeState.Stopped,
                stoppedAt: new Date()
            };

        }
        catch (error) {

            this.status = {
                ...this.status,
                state: RuntimeState.Faulted,
                error: error instanceof Error ? error : new Error(String(error))
            };

            throw error;

        }

    }

    public async dispose(): Promise<void> {

        for (const module of [...this.modules].reverse())
            await module.dispose();

    }

}
