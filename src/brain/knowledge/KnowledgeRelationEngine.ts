import { KnowledgeRelation } from "./KnowledgeRelation.js";

export class KnowledgeRelationEngine {

    public findOutgoing(
        nodeId: string,
        relations: readonly KnowledgeRelation[]
    ): readonly KnowledgeRelation[] {

        return relations.filter(r => r.sourceId === nodeId);

    }

    public findIncoming(
        nodeId: string,
        relations: readonly KnowledgeRelation[]
    ): readonly KnowledgeRelation[] {

        return relations.filter(r => r.targetId === nodeId);

    }

}
