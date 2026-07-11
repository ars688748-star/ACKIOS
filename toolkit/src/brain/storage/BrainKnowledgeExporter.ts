import { KnowledgeManager } from "../knowledge/KnowledgeManager.js";
import { ProjectKnowledge } from "../models/index.js";

export class BrainKnowledgeExporter {

    public export(
        knowledge: KnowledgeManager
    ): ProjectKnowledge {

        return {

            nodes: knowledge.getNodes().map(node => ({

                id: node.id,
                type: node.type as any,
                name: node.name,

                category: knowledge.getCategory(node.id),

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