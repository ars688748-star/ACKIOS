import { KnowledgeRelation } from "./KnowledgeRelation.js";

export class KnowledgeImpactAnalyzer {

    public getImpactedNodes(
        nodeId: string,
        relations: readonly KnowledgeRelation[]
    ): readonly string[] {

        return relations
            .filter(r => r.sourceId === nodeId)
            .map(r => r.targetId);

    }

}
