import { MemoryEntry } from "../memory/MemoryEntry.js";

import { IKnowledgeMapper } from "./IKnowledgeMapper.js";
import { KnowledgeNode } from "./KnowledgeNode.js";

export class MemoryKnowledgeMapper
    implements IKnowledgeMapper<MemoryEntry> {

    public map(entry: MemoryEntry): KnowledgeNode {

        return new KnowledgeNode(
            entry.id,
            entry.kind,
            String(entry.content),
            entry.metadata ?? {},
            entry.tags ?? [],
            entry.score
        );

    }

}
