import { BrainService } from "../services/BrainService.js";
import type { IMemoryManager } from "../contracts/IMemoryManager.js";

import { MemoryEngine } from "./MemoryEngine.js";
import { SessionMemoryStore } from "./session/SessionMemoryStore.js";

import type { MemoryEntry, MemoryKind } from "./MemoryEntry.js";
import type { MemoryQuery } from "./MemoryQuery.js";
import type { MemoryStore } from "./MemoryStore.js";

export class MemoryManager extends BrainService implements IMemoryManager {

    public readonly name = "MemoryManager";

    private readonly engine = new MemoryEngine();

    public constructor() {
        super();

        this.engine.register("session", new SessionMemoryStore());
    }

    public register(kind: MemoryKind, store: MemoryStore): void {
        this.engine.register(kind, store);
    }

    public unregister(kind: MemoryKind): boolean {
        return this.engine.unregister(kind);
    }

    public has(kind: MemoryKind): boolean {
        return this.engine.has(kind);
    }

    public async save(entry: MemoryEntry): Promise<void> {
        await this.engine.save(entry);
    }

    public async get(
        kind: MemoryKind,
        id: string
    ): Promise<MemoryEntry | null> {
        return this.engine.get(kind, id);
    }

    public async query(
        query: MemoryQuery
    ): Promise<MemoryEntry[]> {
        return this.engine.query(query);
    }

}
