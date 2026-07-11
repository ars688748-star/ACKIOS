import { AttentionEngine } from "../attention/AttentionEngine.js";
import { DecisionEngine } from "../decision/DecisionEngine.js";
import { ExecutionEngine } from "../execution/ExecutionEngine.js";
import { GoalEngine } from "../goal-system/GoalEngine.js";
import { PerceptionEngine } from "../perception/PerceptionEngine.js";
import { PlanningEngine } from "../planning/PlanningEngine.js";
import { PredictionEngine } from "../prediction/PredictionEngine.js";
import { CauseEffectEngine } from "../cause-effect/CauseEffectEngine.js";
import { ImpactAnalyzer } from "../impact/ImpactAnalyzer.js";
import { ReflectionEngine } from "../reflection/ReflectionEngine.js";
import { SelfEvaluationEngine } from "../self-evaluation/SelfEvaluationEngine.js";
import { WorkingMemory } from "../working-memory/WorkingMemory.js";
import { WorldModel } from "../world-model/WorldModel.js";
import { CognitiveRuntime } from "../runtime/CognitiveRuntime.js";

export class CognitiveRuntimeFactory {

    static create(): CognitiveRuntime {

        const runtime = new CognitiveRuntime();

        runtime.register(new WorkingMemory());
        runtime.register(new AttentionEngine());
        runtime.register(new PerceptionEngine());
        runtime.register(new WorldModel());
        runtime.register(new PredictionEngine());
        runtime.register(new CauseEffectEngine());
        runtime.register(new ImpactAnalyzer());
        runtime.register(new PlanningEngine());
        runtime.register(new DecisionEngine());
        runtime.register(new ExecutionEngine());
        runtime.register(new ReflectionEngine());
        runtime.register(new SelfEvaluationEngine());
        runtime.register(new GoalEngine());

        return runtime;

    }

}


