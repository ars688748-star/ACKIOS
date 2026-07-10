import type { MemoryEntry } from "../MemoryEntry.js";
import type { MemoryQuery } from "../MemoryQuery.js";
import type { MemoryStore } from "../MemoryStore.js";

export class SessionMemoryStore implements MemoryStore {
    private readonly entries = new Map<string, MemoryEntry>();

    async save(entry: MemoryEntry): Promise<void> {
        this.entries.set(entry.id, entry);
    }

    async get(id: string): Promise<MemoryEntry | null> {
        return this.entries.get(id) ?? null;
    }

    async query(query: MemoryQuery): Promise<MemoryEntry[]> {
        let result = [...this.entries.values()];

        if (query.kind) {
            result = result.filter(entry => entry.kind === query.kind);
        }

        if (query.tags?.length) {
            result = result.filter(entry =>
                query.tags!.every(tag => entry.tags?.includes(tag))
            );
        }

        if (query.limit) {
            result = result.slice(0, query.limit);
        }

        return result;
    }

    async delete(id: string): Promise<boolean> {
        return this.entries.delete(id);
    }

    async clear(): Promise<void> {
        this.entries.clear();
    }

    async size(): Promise<number> {
        return this.entries.size;
    }
}
