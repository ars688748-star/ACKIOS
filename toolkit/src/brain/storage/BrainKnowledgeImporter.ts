import { KnowledgeCategory } from "../knowledge/KnowledgeCategory.js";
import { KnowledgeManager } from "../knowledge/KnowledgeManager.js";
import { KnowledgeNode } from "../knowledge/KnowledgeNode.js";
import { KnowledgeRelation } from "../knowledge/KnowledgeRelation.js";
import { ProjectKnowledge } from "../models/index.js";

export class BrainKnowledgeImporter {

    public import(
        knowledge: KnowledgeManager,
        project: ProjectKnowledge
    ): void {

        const nodes = project.nodes.map(node => ({

            node: new KnowledgeNode(
                node.id,
                String(node.type),
                node.name,
                node.metadata ?? {}
            ),

            category: KnowledgeCategory.Custom

        }));

        const relations = project.edges.map(edge => new KnowledgeRelation(

            edge.id,
            edge.from,
            edge.to,
            String(edge.relation)

        ));

        knowledge.restore(nodes, relations);

    }

}
