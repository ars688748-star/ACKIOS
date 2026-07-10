export type MemoryKind =
    | "session"
    | "semantic"
    | "episodic"
    | "workspace"
    | "project"
    | "vector"
    | "cache";

export interface MemoryEntry {
    id: string;

    kind: MemoryKind;

    content: unknown;

    metadata?: Record<string, unknown>;

    tags?: string[];

    score?: number;

    createdAt: Date;

    updatedAt: Date;
}
