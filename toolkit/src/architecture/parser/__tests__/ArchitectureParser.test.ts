import { describe, expect, it } from "vitest";

import { ArchitectureParser } from "../ArchitectureParser.js";

describe("ArchitectureParser", () => {

    it("creates architecture model from source files", () => {

        const parser = new ArchitectureParser();

        const model = parser.parse([
            {
                path: "/src/index.ts",
                content: "export {};"
            }
        ]);

        expect(model.nodes).toHaveLength(1);
        expect(model.edges).toHaveLength(0);

    });

    it("creates dependency edges from imports", () => {

        const parser = new ArchitectureParser();

        const model = parser.parse([
            {
                path: "/src/index.ts",
                content: 'import { Brain } from "./brain.js";'
            }
        ]);

        expect(model.edges).toHaveLength(1);

        expect(model.edges[0]).toEqual({
            from: "/src/index.ts",
            to: "./brain.js",
            type: "import"
        });

    });

});
