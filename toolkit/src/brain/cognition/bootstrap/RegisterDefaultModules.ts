import { CognitiveRegistry } from "../registry/CognitiveRegistry.js";

import { AttentionEngine } from "../attention/AttentionEngine.js";
import { WorkingMemory } from "../working-memory/WorkingMemory.js";
import { PerceptionEngine } from "../perception/PerceptionEngine.js";
import { PlanningEngine } from "../planning/PlanningEngine.js";
import { DecisionEngine } from "../decision/DecisionEngine.js";
import { ReflectionEngine } from "../reflection/ReflectionEngine.js";
import { PredictionEngine } from "../prediction/PredictionEngine.js";
import { ExecutionEngine } from "../execution/ExecutionEngine.js";
import { GoalEngine } from "../goal-system/GoalEngine.js";
import { WorldModel } from "../world-model/WorldModel.js";

export function registerDefaultCognitiveModules(
    registry:CognitiveRegistry
){

    registry.register(new AttentionEngine());
    registry.register(new WorkingMemory());
    registry.register(new PerceptionEngine());
    registry.register(new PlanningEngine());
    registry.register(new DecisionEngine());
    registry.register(new ReflectionEngine());
    registry.register(new PredictionEngine());
    registry.register(new ExecutionEngine());
    registry.register(new GoalEngine());
    registry.register(new WorldModel());

}
