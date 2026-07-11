import { IKnowledgeManager } from "../contracts/IKnowledgeManager.js";
import { BrainService } from "../services/BrainService.js";
import { KnowledgeCategory } from "./KnowledgeCategory.js";
import { KnowledgeGraph } from "./KnowledgeGraph.js";
import { KnowledgeIndex } from "./KnowledgeIndex.js";
import { KnowledgeNode } from "./KnowledgeNode.js";
import { KnowledgeRelation } from "./KnowledgeRelation.js";

export class KnowledgeManager extends BrainService implements IKnowledgeManager {

    public readonly name = "KnowledgeManager";

    private readonly graph: KnowledgeGraph;
    private readonly index: KnowledgeIndex;

    public constructor() {
        super();

        this.graph = new KnowledgeGraph();
        this.index = new KnowledgeIndex();
    }

    public clear(): void {

        this.graph.clear();
        this.index.clear();

    }

    public restore(
        nodes: readonly {
            node: KnowledgeNode;
            category: KnowledgeCategory;
        }[],
        relations: readonly KnowledgeRelation[]
    ): void {

        this.clear();

        for (const item of nodes) {
            this.addNode(item.node, item.category);
        }

        for (const relation of relations) {
            this.addRelation(relation);
        }

    }

    public addNode(
        node: KnowledgeNode,
        category: KnowledgeCategory
    ): void {

        this.graph.addNode(node);
        this.index.add(node, category);

    }

    public addRelation(
        relation: KnowledgeRelation
    ): void {

        this.graph.addRelation(relation);

    }

    public getNode(id: string): KnowledgeNode | undefined {
        return this.graph.getNode(id);
    }

    public getNodes(): readonly KnowledgeNode[] {
        return this.graph.getNodes();
    }

    public getNodesByCategory(
        category: KnowledgeCategory
    ): readonly KnowledgeNode[] {
        return this.index.getByCategory(category);
    }

    public getRelation(id: string): KnowledgeRelation | undefined {
        return this.graph.getRelation(id);
    }

    public getRelations(): readonly KnowledgeRelation[] {
        return this.graph.getRelations();
    }

    public getGraph(): KnowledgeGraph {
        return this.graph;
    }

    public getIndex(): KnowledgeIndex {
        return this.index;
    }

}
