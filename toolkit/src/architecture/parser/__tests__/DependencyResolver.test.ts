import { describe, expect, it } from "vitest";

import { DependencyResolver } from "../DependencyResolver.js";

describe("DependencyResolver", () => {

    it("resolves existing TypeScript dependency", () => {

        const resolver =
            new DependencyResolver();

        const result =
            resolver.resolve(
                "./brain",
                [
                    "/src/index.ts",
                    "/src/brain.ts"
                ]
            );

        expect(result).toBe("/src/brain.ts");

    });


    it("keeps unresolved dependency", () => {

        const resolver =
            new DependencyResolver();

        const result =
            resolver.resolve(
                "./missing",
                [
                    "/src/index.ts"
                ]
            );

        expect(result).toBe("./missing");

    });

});
