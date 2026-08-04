import type { MemoryEntry } from "./MemoryEntry.js";
import type { MemoryQuery } from "./MemoryQuery.js";

export interface MemoryStore {
    save(entry: MemoryEntry): Promise<void>;

    get(id: string): Promise<MemoryEntry | null>;

    query(query: MemoryQuery): Promise<MemoryEntry[]>;

    delete(id: string): Promise<boolean>;

    clear(): Promise<void>;

    size(): Promise<number>;
}
