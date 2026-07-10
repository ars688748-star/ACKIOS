import type { MemoryEntry } from "../MemoryEntry.js";
import type { MemoryQuery } from "../MemoryQuery.js";
import type { MemoryStore } from "../MemoryStore.js";

export abstract class AbstractMemoryStore implements MemoryStore {

    protected readonly entries = new Map<string, MemoryEntry>();

    public async save(entry: MemoryEntry): Promise<void> {
        this.entries.set(entry.id, entry);
    }

    public async get(id: string): Promise<MemoryEntry | null> {
        return this.entries.get(id) ?? null;
    }

    public async delete(id: string): Promise<boolean> {
        return this.entries.delete(id);
    }

    public async clear(): Promise<void> {
        this.entries.clear();
    }

    public async size(): Promise<number> {
        return this.entries.size;
    }

    public abstract query(query: MemoryQuery): Promise<MemoryEntry[]>;

}
