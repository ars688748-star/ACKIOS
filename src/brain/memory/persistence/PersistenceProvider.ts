import type { MemoryEntry } from "../MemoryEntry.js";
import type { MemoryQuery } from "../MemoryQuery.js";

export interface PersistenceProvider {

    initialize(): Promise<void>;

    dispose(): Promise<void>;

    save(entry: MemoryEntry): Promise<void>;

    get(id: string): Promise<MemoryEntry | null>;

    query(query: MemoryQuery): Promise<MemoryEntry[]>;

    delete(id: string): Promise<boolean>;

    clear(): Promise<void>;

}
