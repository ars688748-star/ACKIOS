import { BrainRuntime } from "./BrainRuntime.js";
import { BrainPipeline } from "../pipeline/BrainPipeline.js";
import { BrainDispatcher } from "../dispatcher/BrainDispatcher.js";
import { BrainScheduler } from "../scheduler/BrainScheduler.js";
import { BrainExecutor } from "../executor/BrainExecutor.js";

export class BrainRuntimeBuilder {

    public build(): BrainRuntime {

        const pipeline = new BrainPipeline();

        const dispatcher = new BrainDispatcher();

        const scheduler = new BrainScheduler();

        const executor = new BrainExecutor();

        return new BrainRuntime(
            pipeline,
            dispatcher,
            scheduler,
            executor
        );

    }

}
