import { KnowledgeCategory } from "./KnowledgeCategory.js";
import { KnowledgeNode } from "./KnowledgeNode.js";

export class KnowledgeIndex {

    private readonly byId = new Map<string, KnowledgeNode>();

    private readonly byCategory = new Map<KnowledgeCategory, Set<string>>();

    private readonly categoryById = new Map<string, KnowledgeCategory>();

    public add(
        node: KnowledgeNode,
        category: KnowledgeCategory
    ): void {

        this.byId.set(node.id, node);

        this.categoryById.set(node.id, category);

        let ids = this.byCategory.get(category);

        if (!ids) {

            ids = new Set<string>();

            this.byCategory.set(category, ids);

        }

        ids.add(node.id);

    }

    public get(
        id: string
    ): KnowledgeNode | undefined {

        return this.byId.get(id);

    }

    public getCategory(
        id: string
    ): KnowledgeCategory | undefined {

        return this.categoryById.get(id);

    }

    public getByCategory(
        category: KnowledgeCategory
    ): readonly KnowledgeNode[] {

        const ids = this.byCategory.get(category);

        if (!ids) {
            return [];
        }

        return [...ids]
            .map(id => this.byId.get(id))
            .filter((node): node is KnowledgeNode => node !== undefined);

    }

    public clear(): void {

        this.byId.clear();
        this.byCategory.clear();
        this.categoryById.clear();

    }

}