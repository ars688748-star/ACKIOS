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

});
