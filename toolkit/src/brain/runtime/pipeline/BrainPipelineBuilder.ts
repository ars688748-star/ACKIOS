import { BrainPipeline } from "./BrainPipeline.js";

import { MemoryStage } from "../stages/MemoryStage.js";
import { KnowledgeStage } from "../stages/KnowledgeStage.js";
import { ReasoningStage } from "../stages/ReasoningStage.js";
import { PlanningStage } from "../stages/PlanningStage.js";
import { DecisionStage } from "../stages/DecisionStage.js";
import { ExecutionStage } from "../stages/ExecutionStage.js";
import { ArchitectureOrchestratorStage } from "../stages/ArchitectureOrchestratorStage.js";

export class BrainPipelineBuilder {

    public build(): BrainPipeline {

        return new BrainPipeline()

            .addStage(new MemoryStage())
            .addStage(new KnowledgeStage())
            .addStage(new ReasoningStage())
            .addStage(new PlanningStage())
            .addStage(new DecisionStage())
            .addStage(new ExecutionStage())
            .addStage(new ArchitectureOrchestratorStage());

    }

}
