import { KnowledgeRelationType } from "./KnowledgeRelationType.js";

export class KnowledgeRelation {

    public readonly id: string;
    public readonly sourceId: string;
    public readonly targetId: string;
    public readonly type: KnowledgeRelationType;
    public readonly metadata: Record<string, unknown>;

    public constructor(
        id: string,
        sourceId: string,
        targetId: string,
        type: KnowledgeRelationType,
        metadata: Record<string, unknown> = {}
    ) {
        this.id = id;
        this.sourceId = sourceId;
        this.targetId = targetId;
        this.type = type;
        this.metadata = metadata;
    }

    public getMetadata<T = unknown>(key: string): T | undefined {
        return this.metadata[key] as T | undefined;
    }

    public setMetadata(key: string, value: unknown): void {
        this.metadata[key] = value;
    }

}
