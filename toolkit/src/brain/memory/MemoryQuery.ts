import type { MemoryKind } from "./MemoryEntry.js";

export interface MemoryQuery {
    kind?: MemoryKind;

    text?: string;

    tags?: string[];

    limit?: number;

    minScore?: number;

    metadata?: Record<string, unknown>;
}
