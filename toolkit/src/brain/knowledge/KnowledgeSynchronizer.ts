import { MemoryEntry } from "../memory/MemoryEntry.js";
import { KnowledgeManager } from "./KnowledgeManager.js";

export class KnowledgeSynchronizer {

    public constructor(
        private readonly knowledge: KnowledgeManager
    ) {
    }

    public async synchronize(
        _entry: MemoryEntry
    ): Promise<void> {

        // Sprint 12
        // Здесь позже будет преобразование
        // MemoryEntry -> KnowledgeNode.

    }

}
