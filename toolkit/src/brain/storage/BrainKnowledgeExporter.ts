import { KnowledgeManager } from "../knowledge/KnowledgeManager.js";
import { KnowledgeRelationType } from "../knowledge/KnowledgeRelationType.js";
import { ProjectKnowledge, BrainNodeType, BrainRelationType } from "../models/index.js";

export class BrainKnowledgeExporter {

    private mapRelationType(
        relation: KnowledgeRelationType
    ): BrainRelationType {

        switch (relation) {

            case KnowledgeRelationType.DependsOn:
                return BrainRelationType.DependsOn

            case KnowledgeRelationType.Contains:
                return BrainRelationType.Contains

            case KnowledgeRelationType.Uses:
                return BrainRelationType.Uses

            case KnowledgeRelationType.Implements:
                return BrainRelationType.Implements

            default:
                return BrainRelationType.RelatedTo

        }

    }


    public export(
        knowledge: KnowledgeManager
    ): ProjectKnowledge {

        return {

            nodes: knowledge.getNodes().map(node => ({

                id: node.id,
                type: node.type as BrainNodeType,
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

                relation: this.mapRelationType(relation.type)

            })),

            technologies: [],

            risks: [],

            capabilities: [],

            analyses: []

        };

    }

}







