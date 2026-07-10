import { MemoryEntry } from "../memory/MemoryEntry.js";

import { KnowledgeCategory } from "./KnowledgeCategory.js";
import { KnowledgeManager } from "./KnowledgeManager.js";
import { MemoryKnowledgeMapper } from "./MemoryKnowledgeMapper.js";

export class KnowledgeSynchronizer {

    private readonly mapper = new MemoryKnowledgeMapper();

    public constructor(
        private readonly knowledge: KnowledgeManager
    ) {
    }

    public async synchronize(
        entry: MemoryEntry
    ): Promise<void> {

        const node = this.mapper.map(entry);

        this.knowledge.addNode(
            node,
            KnowledgeCategory.Memory
        );

    }

}
