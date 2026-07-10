import { describe, expect, it } from "vitest";

import { KnowledgeCategory } from "../knowledge/KnowledgeCategory.js";
import { KnowledgeManager } from "../knowledge/KnowledgeManager.js";
import { KnowledgeSynchronizer } from "../knowledge/KnowledgeSynchronizer.js";

import type { MemoryEntry } from "../memory/MemoryEntry.js";

describe("KnowledgeSynchronizer", () => {

    it("converts memory entry into knowledge node", async () => {

        const manager = new KnowledgeManager();
        const synchronizer = new KnowledgeSynchronizer(manager);

        const entry: MemoryEntry = {
            id: "memory-1",
            kind: "session",
            content: "Hello ACKI",
            metadata: {
                source: "test"
            },
            tags: ["demo"],
            score: 0.95,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        await synchronizer.synchronize(entry);

        const node = manager.getNode("memory-1");

        expect(node).toBeDefined();
        expect(node?.name).toBe("Hello ACKI");

        const memoryNodes = manager.getNodesByCategory(
            KnowledgeCategory.Memory
        );

        expect(memoryNodes).toHaveLength(1);
        expect(memoryNodes[0].id).toBe("memory-1");

    });

});
