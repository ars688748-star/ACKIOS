import { KnowledgeManager } from "../knowledge/KnowledgeManager.js";
import { ArchitectureSimulationResult } from "../models/ArchitectureSimulationResult.js";

export class ChangeImpactSimulation {

    public constructor(
        private readonly knowledge: KnowledgeManager
    ) {}

    public simulate(
        componentId: string
    ): ArchitectureSimulationResult {

        const node = this.knowledge.getNode(componentId);

        if (!node) {

            return {
                success: false,
                affectedComponents: [],
                warnings: ["Component not found"],
                estimatedRisk: 100
            };

        }

        return {
            success: true,
            affectedComponents: [componentId],
            warnings: [],
            estimatedRisk: 10
        };

    }

}
