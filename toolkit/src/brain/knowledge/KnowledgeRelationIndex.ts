import { KnowledgeRelation } from "./KnowledgeRelation.js";

export class KnowledgeRelationIndex {

    private readonly outgoing = new Map<string, KnowledgeRelation[]>();

    private readonly incoming = new Map<string, KnowledgeRelation[]>();

    public add(relation: KnowledgeRelation): void {

        const out = this.outgoing.get(relation.sourceId) ?? [];
        out.push(relation);
        this.outgoing.set(relation.sourceId, out);

        const inc = this.incoming.get(relation.targetId) ?? [];
        inc.push(relation);
        this.incoming.set(relation.targetId, inc);

    }

    public getOutgoing(nodeId: string): readonly KnowledgeRelation[] {
        return this.outgoing.get(nodeId) ?? [];
    }

    public getIncoming(nodeId: string): readonly KnowledgeRelation[] {
        return this.incoming.get(nodeId) ?? [];
    }

    public clear(): void {
        this.outgoing.clear();
        this.incoming.clear();
    }

}
