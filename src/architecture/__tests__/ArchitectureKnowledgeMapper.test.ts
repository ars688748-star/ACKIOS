import { describe, expect, it } from "vitest";

import { ArchitectureKnowledgeMapper } from "../knowledge/ArchitectureKnowledgeMapper.js";

describe("ArchitectureKnowledgeMapper", () => {

    it("maps architecture nodes into knowledge nodes", () => {

        const mapper = new ArchitectureKnowledgeMapper();

        const result = mapper.map({
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

        expect(result).toHaveLength(2);

        expect(result[0].id)
            .toBe("architecture:src");

        expect(result[0].type)
            .toBe("directory");

        expect(result[1].id)
            .toBe("architecture:src/main.ts");

        expect(result[1].type)
            .toBe("file");

    });

});
