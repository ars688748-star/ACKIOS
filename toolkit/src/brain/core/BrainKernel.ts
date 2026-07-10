import { BrainKernelConfig } from "./BrainKernelConfig.js";
import { IBrainKernel } from "./IBrainKernel.js";

import { BrainServiceRegistry } from "../services/BrainServiceRegistry.js";
import { BrainState } from "../state/BrainState.js";

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

export class BrainKernel implements IBrainKernel {

    public readonly services = new BrainServiceRegistry();
    public readonly state = new BrainState();

    public readonly memory = new MemoryManager();
    public readonly knowledge = new KnowledgeManager();
    public readonly context = new ContextManager();
    public readonly reasoning = new ReasoningManager();
    public readonly planning = new PlanningManager();
    public readonly decision = new DecisionManager();
    public readonly learning = new LearningManager();
    public readonly reflection = new ReflectionManager();
    public readonly prediction = new PredictionManager();
    public readonly execution = new ExecutionManager();
    public readonly agents = new AgentManager();
    public readonly tools = new ToolManager();
    public readonly events = new EventManager();
    public readonly telemetry = new TelemetryManager();

    public constructor(
        public readonly config: BrainKernelConfig = {}
    ) {

        [
            this.memory,
            this.knowledge,
            this.context,
            this.reasoning,
            this.planning,
            this.decision,
            this.learning,
            this.reflection,
            this.prediction,
            this.execution,
            this.agents,
            this.tools,
            this.events,
            this.telemetry
        ].forEach(service => this.services.register(service));

    }

    public async initialize(): Promise<void> {
        await this.services.initialize();
        this.state.initialized = true;
    }

    public async start(): Promise<void> {
        this.state.running = true;
    }

    public async stop(): Promise<void> {
        this.state.running = false;
    }

    public async dispose(): Promise<void> {
        await this.services.dispose();
        this.state.disposed = true;
    }

}
