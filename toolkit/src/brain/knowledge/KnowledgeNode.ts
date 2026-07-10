export class KnowledgeNode {

    public readonly id: string;

    public readonly type: string;

    public readonly name: string;

    public readonly metadata: Record<string, unknown>;

    public readonly tags: string[];

    public score?: number;

    public readonly createdAt: Date;

    public updatedAt: Date;

    public constructor(
        id: string,
        type: string,
        name: string,
        metadata: Record<string, unknown> = {},
        tags: string[] = [],
        score?: number
    ) {

        this.id = id;
        this.type = type;
        this.name = name;

        this.metadata = metadata;

        this.tags = [...tags];

        this.score = score;

        this.createdAt = new Date();

        this.updatedAt = new Date();

    }

    public touch(): void {

        this.updatedAt = new Date();

    }

    public setMetadata(
        key: string,
        value: unknown
    ): void {

        this.metadata[key] = value;

        this.touch();

    }

    public getMetadata<T = unknown>(
        key: string
    ): T | undefined {

        return this.metadata[key] as T | undefined;

    }

}
