import { BrainRuntime } from "./BrainRuntime.js";

import { BrainPipeline } from "../pipeline/BrainPipeline.js";

import { BrainDispatcher } from "../dispatcher/BrainDispatcher.js";
import { BrainScheduler } from "../scheduler/BrainScheduler.js";
import { BrainExecutor } from "../executor/BrainExecutor.js";

import { MemoryStage } from "../stages/MemoryStage.js";
import { KnowledgeStage } from "../stages/KnowledgeStage.js";
import { ReasoningStage } from "../stages/ReasoningStage.js";
import { PlanningStage } from "../stages/PlanningStage.js";
import { DecisionStage } from "../stages/DecisionStage.js";
import { ExecutionStage } from "../stages/ExecutionStage.js";

export class BrainRuntimeBuilder {

    public build(): BrainRuntime {

        const pipeline = new BrainPipeline();

        pipeline
            .addStage(new MemoryStage())
            .addStage(new KnowledgeStage())
            .addStage(new ReasoningStage())
            .addStage(new PlanningStage())
            .addStage(new DecisionStage())
            .addStage(new ExecutionStage());

        return new BrainRuntime(

            pipeline,

            new BrainDispatcher(),

            new BrainScheduler(),

            new BrainExecutor()

        );

    }

}
