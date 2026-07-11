import { BrainRuntime } from "./BrainRuntime.js";

import { BrainPipelineBuilder } from "../pipeline/BrainPipelineBuilder.js";

import { BrainDispatcher } from "../dispatcher/BrainDispatcher.js";
import { BrainScheduler } from "../scheduler/BrainScheduler.js";
import { BrainExecutor } from "../executor/BrainExecutor.js";

export class BrainRuntimeBuilder {

    public build(): BrainRuntime {

        return new BrainRuntime(

            new BrainPipelineBuilder().build(),

            new BrainDispatcher(),

            new BrainScheduler(),

            new BrainExecutor()

        );

    }

}
