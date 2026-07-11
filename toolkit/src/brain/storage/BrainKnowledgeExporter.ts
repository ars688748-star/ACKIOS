import { KnowledgeManager } from "../knowledge/KnowledgeManager.js";
import { ProjectKnowledge } from "../models/index.js";

export class BrainKnowledgeExporter {

    public export(
        knowledge: KnowledgeManager
    ): ProjectKnowledge {

        return {

            nodes: knowledge.getNodes().map(node => ({
                id: node.id,
                name: node.name,
                type: node.type as any,
                metadata: node.metadata,
                createdAt: node.createdAt,
                updatedAt: node.updatedAt
            })),

            edges: knowledge.getRelations().map(relation => ({
                id: relation.id,
                from: relation.sourceId,
                to: relation.targetId,
                relation: relation.type as any
            })),

            technologies: [],

            risks: [],

            capabilities: [],

            analyses: []

        };

    }

}
