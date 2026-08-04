import { BrainKernel } from "./BrainKernel.js";
import { BrainKernelConfig } from "./BrainKernelConfig.js";

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

import { BrainKnowledgeExporter } from "../storage/BrainKnowledgeExporter.js";
import { BrainKnowledgeImporter } from "../storage/BrainKnowledgeImporter.js";
import { KnowledgePersistenceService } from "../storage/KnowledgePersistenceService.js";

export class BrainKernelBuilder {

    public build(
        config: BrainKernelConfig = {}
    ): BrainKernel {

        const memory = new MemoryManager();
        const knowledge = new KnowledgeManager();
        const context = new ContextManager();
        const reasoning = new ReasoningManager();
        const planning = new PlanningManager();
        const decision = new DecisionManager();
        const learning = new LearningManager();
        const reflection = new ReflectionManager();
        const prediction = new PredictionManager();
        const execution = new ExecutionManager();
        const agents = new AgentManager();
        const tools = new ToolManager();
        const events = new EventManager();
        const telemetry = new TelemetryManager();

        const exporter = new BrainKnowledgeExporter();
        const importer = new BrainKnowledgeImporter();

        const persistence = config.storage
            ? new KnowledgePersistenceService(
                knowledge,
                exporter,
                importer,
                config.storage
            )
            : undefined;


        return new BrainKernel(

            {
                memory,
                knowledge,
                context,
                reasoning,
                planning,
                decision,
                learning,
                reflection,
                prediction,
                execution,
                agents,
                tools,
                events,
                telemetry,
                persistence
            },

            config

        );

    }

}
