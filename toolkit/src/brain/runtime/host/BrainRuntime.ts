import { BrainDispatcher } from "../dispatcher/BrainDispatcher.js";
import { BrainExecutor } from "../executor/BrainExecutor.js";
import { BrainPipeline } from "../pipeline/BrainPipeline.js";
import { BrainScheduler } from "../scheduler/BrainScheduler.js";
import { RuntimeContext } from "../context/RuntimeContext.js";
import { IBrainRuntime } from "./IBrainRuntime.js";

export class BrainRuntime implements IBrainRuntime {

    private readonly pipeline = new BrainPipeline();

    private readonly dispatcher = new BrainDispatcher();

    private readonly scheduler = new BrainScheduler();

    private readonly executor = new BrainExecutor();

    public getPipeline(): BrainPipeline {

        return this.pipeline;

    }

    public async run(
        context: RuntimeContext
    ): Promise<RuntimeContext> {

        return await this.dispatcher.dispatch(async () => {

            let result = context;

            this.scheduler.enqueue(async () => {

                result = await this.pipeline.execute(result);

            });

            await this.scheduler.run();

            await this.executor.execute(async () => {});

            return result;

        });

    }

}
