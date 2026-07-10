import { IBrainLifecycle } from "../api/IBrainLifecycle.js";

import { MemoryManager } from "../memory/MemoryManager.js";
import { KnowledgeManager } from "../knowledge/KnowledgeManager.js";
import { ContextManager } from "../context/ContextManager.js";
import { ReasoningManager } from "../reasoning/ReasoningManager.js";
import { PlanningManager } from "../planning/PlanningManager.js";
import { DecisionManager } from "../decision/DecisionManager.js";
import { LearningManager } from "../learning/LearningManager.js";
import { ReflectionManager } from "../reflection/ReflectionManager.js";
import { PredictionManager } from "../prediction/PredictionManager.js";
import { ExecutionManager } from "../execution/ExecutionManager.js";
import { AgentManager } from "../agents/AgentManager.js";
import { ToolManager } from "../tools/ToolManager.js";
import { EventManager } from "../events/EventManager.js";
import { TelemetryManager } from "../telemetry/TelemetryManager.js";

export interface IBrainKernel extends IBrainLifecycle {

    readonly memory: MemoryManager;
    readonly knowledge: KnowledgeManager;
    readonly context: ContextManager;
    readonly reasoning: ReasoningManager;
    readonly planning: PlanningManager;
    readonly decision: DecisionManager;
    readonly learning: LearningManager;
    readonly reflection: ReflectionManager;
    readonly prediction: PredictionManager;
    readonly execution: ExecutionManager;
    readonly agents: AgentManager;
    readonly tools: ToolManager;
    readonly events: EventManager;
    readonly telemetry: TelemetryManager;

}
