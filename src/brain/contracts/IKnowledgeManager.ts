import { KnowledgeCategory } from "../knowledge/KnowledgeCategory.js";
import { KnowledgeGraph } from "../knowledge/KnowledgeGraph.js";
import { KnowledgeIndex } from "../knowledge/KnowledgeIndex.js";
import { KnowledgeNode } from "../knowledge/KnowledgeNode.js";
import { KnowledgeRelation } from "../knowledge/KnowledgeRelation.js";

export interface IKnowledgeManager {

    addNode(
        node: KnowledgeNode,
        category: KnowledgeCategory
    ): void;

    addRelation(
        relation: KnowledgeRelation
    ): void;

    getNode(
        id: string
    ): KnowledgeNode | undefined;

    getNodes(): readonly KnowledgeNode[];

    getNodesByCategory(
        category: KnowledgeCategory
    ): readonly KnowledgeNode[];

    getRelation(
        id: string
    ): KnowledgeRelation | undefined;

    getRelations(): readonly KnowledgeRelation[];

    getGraph(): KnowledgeGraph;

    getIndex(): KnowledgeIndex;

}



