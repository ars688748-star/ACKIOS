import { describe, expect, it } from "vitest";

import { ArchitectureParser } from "../ArchitectureParser.js";

describe("ArchitectureParser", () => {

    it("creates architecture model from nodes", () => {

        const parser = new ArchitectureParser();

        const model = parser.parse([
            {
                name: "src",
                path: "/src",
                type: "directory"
            }
        ]);

        expect(model.nodes).toHaveLength(1);

        expect(model.nodes[0].name).toBe("src");

    });

});
