import { describe, expect, it } from "vitest";

import { KnowledgeManager } from "../knowledge/KnowledgeManager.js";
import { ArchitectureKnowledgeSynchronizer } from "../knowledge/ArchitectureKnowledgeSynchronizer.js";

describe("ArchitectureKnowledgeSynchronizer", () => {

    it("synchronizes architecture model into knowledge", () => {

        const knowledge = new KnowledgeManager();

        const synchronizer =
            new ArchitectureKnowledgeSynchronizer(
                knowledge
            );

        synchronizer.synchronize({

            nodes: [
                {
                    name: "src",
                    path: "src",
                    type: "directory"
                },
                {
                    name: "main.ts",
                    path: "src/main.ts",
                    type: "file"
                }
            ],

            edges: []

        });

        expect(
            knowledge.getNodes()
        ).toHaveLength(2);


        expect(
            knowledge.getNode("architecture:src")
        ).toBeDefined();


        expect(
            knowledge.getNode("architecture:src/main.ts")
        ).toBeDefined();

    });

});
