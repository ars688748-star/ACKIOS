import { KnowledgeNode } from "./KnowledgeNode.js";
import { KnowledgeRelation } from "./KnowledgeRelation.js";

export class KnowledgeGraph {
    private readonly nodes = new Map<string, KnowledgeNode>();
    private readonly relations = new Map<string, KnowledgeRelation>();

    public addNode(node: KnowledgeNode): void {
        this.nodes.set(node.id, node);
    }

    public removeNode(id: string): boolean {
        return this.nodes.delete(id);
    }

    public addRelation(relation: KnowledgeRelation): void {
        this.relations.set(relation.id, relation);
    }

    public removeRelation(id: string): boolean {
        return this.relations.delete(id);
    }

    public getNode(id: string): KnowledgeNode | undefined {
        return this.nodes.get(id);
    }

    public getRelation(id: string): KnowledgeRelation | undefined {
        return this.relations.get(id);
    }

    public getNodes(): readonly KnowledgeNode[] {
        return [...this.nodes.values()];
    }

    public getRelations(): readonly KnowledgeRelation[] {
        return [...this.relations.values()];
    }

    public clear(): void {
        this.nodes.clear();
        this.relations.clear();
    }
}
