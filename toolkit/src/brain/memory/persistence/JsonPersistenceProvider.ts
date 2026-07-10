import type { MemoryEntry } from "../MemoryEntry.js";
import type { MemoryQuery } from "../MemoryQuery.js";

import { PersistenceProvider } from "./PersistenceProvider.js";

export class JsonPersistenceProvider implements PersistenceProvider {

    public async initialize(): Promise<void> {
    }

    public async dispose(): Promise<void> {
    }

    public async save(entry: MemoryEntry): Promise<void> {
        void entry;
    }

    public async get(id: string): Promise<MemoryEntry | null> {
        void id;
        return null;
    }

    public async query(query: MemoryQuery): Promise<MemoryEntry[]> {
        void query;
        return [];
    }

    public async delete(id: string): Promise<boolean> {
        void id;
        return false;
    }

    public async clear(): Promise<void> {
    }

}
