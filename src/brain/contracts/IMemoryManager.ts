import type { MemoryEntry, MemoryKind } from "../memory/MemoryEntry.js";
import type { MemoryQuery } from "../memory/MemoryQuery.js";
import type { MemoryStore } from "../memory/MemoryStore.js";

export interface IMemoryManager {

    register(kind: MemoryKind, store: MemoryStore): void;

    unregister(kind: MemoryKind): boolean;

    has(kind: MemoryKind): boolean;

    save(entry: MemoryEntry): Promise<void>;

    get(kind: MemoryKind, id: string): Promise<MemoryEntry | null>;

    query(query: MemoryQuery): Promise<MemoryEntry[]>;

}



