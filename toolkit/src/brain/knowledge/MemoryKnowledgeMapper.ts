import { MemoryEntry } from "../memory/MemoryEntry.js";
import { KnowledgeNode } from "./KnowledgeNode.js";

export class MemoryKnowledgeMapper {

    public map(entry: MemoryEntry): KnowledgeNode {

        return new KnowledgeNode(
            entry.id,
            "memory",
            entry.id
        );

    }

}
