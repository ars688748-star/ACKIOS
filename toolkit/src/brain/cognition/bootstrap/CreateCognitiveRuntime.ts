import { CognitivePipeline } from "../pipeline/CognitivePipeline.js";
import { CognitiveRegistry } from "../registry/CognitiveRegistry.js";
import { CognitiveRuntime } from "../runtime/CognitiveRuntime.js";

import {
MemoryCognitiveStage,
KnowledgeCognitiveStage,
ReasoningCognitiveStage,
PlanningCognitiveStage,
DecisionCognitiveStage,
ExecutionCognitiveStage,
PredictionCognitiveStage,
ReflectionCognitiveStage
} from "../stages/index.js";

export function createCognitiveRuntime(){

    const registry=new CognitiveRegistry();

    registry.register(new MemoryCognitiveStage());
    registry.register(new KnowledgeCognitiveStage());
    registry.register(new ReasoningCognitiveStage());
    registry.register(new PlanningCognitiveStage());
    registry.register(new DecisionCognitiveStage());
    registry.register(new ExecutionCognitiveStage());
    registry.register(new PredictionCognitiveStage());
    registry.register(new ReflectionCognitiveStage());

    const pipeline=new CognitivePipeline();

    const runtime=new CognitiveRuntime(
        pipeline,
        registry
    );

    return runtime;

}
