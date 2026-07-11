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
import { KnowledgePersistenceService } from "../storage/KnowledgePersistenceService.js";

export interface BrainKernelServices {

    memory: MemoryManager;

    knowledge: KnowledgeManager;

    context: ContextManager;

    reasoning: ReasoningManager;

    planning: PlanningManager;

    decision: DecisionManager;

    learning: LearningManager;

    reflection: ReflectionManager;

    prediction: PredictionManager;

    execution: ExecutionManager;

    agents: AgentManager;

    tools: ToolManager;

    events: EventManager;

    telemetry: TelemetryManager;

    persistence?: KnowledgePersistenceService;

}

export class BrainKernel implements IBrainKernel {

    public readonly services = new BrainServiceRegistry();

    public readonly state = new BrainState();

    public readonly memory: MemoryManager;

    public readonly knowledge: KnowledgeManager;

    public readonly context: ContextManager;

    public readonly reasoning: ReasoningManager;

    public readonly planning: PlanningManager;

    public readonly decision: DecisionManager;

    public readonly learning: LearningManager;

    public readonly reflection: ReflectionManager;

    public readonly prediction: PredictionManager;

    public readonly execution: ExecutionManager;

    public readonly agents: AgentManager;

    public readonly tools: ToolManager;

    public readonly events: EventManager;

    public readonly telemetry: TelemetryManager;

    public constructor(
        services: BrainKernelServices,
        public readonly config: BrainKernelConfig = {}
    ){

        this.memory = services.memory;
        this.knowledge = services.knowledge;
        this.context = services.context;
        this.reasoning = services.reasoning;
        this.planning = services.planning;
        this.decision = services.decision;
        this.learning = services.learning;
        this.reflection = services.reflection;
        this.prediction = services.prediction;
        this.execution = services.execution;
        this.agents = services.agents;
        this.tools = services.tools;
        this.events = services.events;
        this.telemetry = services.telemetry;


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
