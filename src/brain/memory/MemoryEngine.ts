import type { MemoryEntry, MemoryKind } from "./MemoryEntry.js";
import type { MemoryQuery } from "./MemoryQuery.js";
import type { MemoryStore } from "./MemoryStore.js";

export class MemoryEngine {
    private readonly stores = new Map<MemoryKind, MemoryStore>();

    register(kind: MemoryKind, store: MemoryStore): void {
        this.stores.set(kind, store);
    }

    unregister(kind: MemoryKind): boolean {
        return this.stores.delete(kind);
    }

    has(kind: MemoryKind): boolean {
        return this.stores.has(kind);
    }

    getStore(kind: MemoryKind): MemoryStore | undefined {
        return this.stores.get(kind);
    }

    async save(entry: MemoryEntry): Promise<void> {
        const store = this.stores.get(entry.kind);

        if (!store) {
            throw new Error(`Memory store '${entry.kind}' is not registered.`);
        }

        await store.save(entry);
    }

    async get(kind: MemoryKind, id: string): Promise<MemoryEntry | null> {
        const store = this.stores.get(kind);

        if (!store) {
            return null;
        }

        return store.get(id);
    }

    async query(query: MemoryQuery): Promise<MemoryEntry[]> {
        if (query.kind) {
            const store = this.stores.get(query.kind);

            return store ? store.query(query) : [];
        }

        const result: MemoryEntry[] = [];

        for (const store of this.stores.values()) {
            result.push(...await store.query(query));
        }

        return result;
    }

    kinds(): MemoryKind[] {
        return [...this.stores.keys()];
    }

    clear(): void {
        this.stores.clear();
    }
}
