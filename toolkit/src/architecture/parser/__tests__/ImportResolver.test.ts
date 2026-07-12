import { describe, expect, it } from "vitest";

import { ImportResolver } from "../ImportResolver.js";

describe("ImportResolver", () => {

    it("resolves relative import", () => {

        const resolver = new ImportResolver();

        const result = resolver.resolve(
            "/src/index.ts",
            "./brain.js"
        );

        expect(result.endsWith("/src/brain.js")).toBe(true);

    });

    it("keeps package imports unchanged", () => {

        const resolver = new ImportResolver();

        expect(
            resolver.resolve(
                "/src/index.ts",
                "vitest"
            )
        ).toBe("vitest");

    });

});
