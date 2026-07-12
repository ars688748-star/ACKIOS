import { describe, expect, it } from "vitest";

import { ArchitectureScanner } from "../ArchitectureScanner.js";

describe("ArchitectureScanner", () => {

    it("scans project directory", async () => {

        const scanner = new ArchitectureScanner();

        const nodes = await scanner.scan("src");

        expect(nodes.length).toBeGreaterThan(0);

    });

});
