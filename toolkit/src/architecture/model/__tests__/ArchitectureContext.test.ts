import { describe, expect, it } from "vitest";
import type { ArchitectureContext } from "../ArchitectureContext.js";

describe("ArchitectureContext", () => {

    it("stores architecture state", () => {

        const context: ArchitectureContext = {};

        expect(context).toBeDefined();

    });

});
