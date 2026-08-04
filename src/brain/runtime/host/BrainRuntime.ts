import { BrainDispatcher } from "../dispatcher/BrainDispatcher.js";
import { BrainExecutor } from "../executor/BrainExecutor.js";
import { BrainPipeline } from "../pipeline/BrainPipeline.js";
import { BrainScheduler } from "../scheduler/BrainScheduler.js";
import { RuntimeContext } from "../context/RuntimeContext.js";

import { BrainServiceRegistry } from "../../services/BrainServiceRegistry.js";

import { IBrainRuntime } from "./IBrainRuntime.js";

export class BrainRuntime implements IBrainRuntime {

    private running = false;

    public constructor(
        private readonly pipeline: BrainPipeline,
        private readonly dispatcher: BrainDispatcher,
        private readonly scheduler: BrainScheduler,
        private readonly executor: BrainExecutor,
        private readonly services?: BrainServiceRegistry
    ) {}

    public async start(): Promise<void> {

        this.running = true;

    }

    public async stop(): Promise<void> {

        this.running = false;

    }

    public getPipeline(): BrainPipeline {

        return this.pipeline;

    }

    public async run(
        context: RuntimeContext
    ): Promise<RuntimeContext> {

        if (!this.running) {
            await this.start();
        }

        const runtimeContext = {

            ...context,

            services:
                context.services ?? this.services

        };

        return await this.dispatcher.dispatch(async () => {

            let current = runtimeContext;

            this.scheduler.enqueue(async () => {

                current = await this.pipeline.execute(current);

            });

            await this.scheduler.run();

            await this.executor.execute(async () => {});

            return current;

        });

    }

}
