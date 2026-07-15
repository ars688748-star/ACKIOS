import { describe, expect, it } from "vitest";

import { ArchitecturePipeline } from "../ArchitecturePipeline.js";

describe("ArchitecturePipeline integration", () => {

    it("builds complete architecture report", async () => {

        const pipeline = new ArchitecturePipeline();

        const result = await pipeline.run({
            root: "src"
        });

        expect(result.report).toBeDefined();

        expect(result.report!.scannedFiles)
            .toBeGreaterThan(0);

        expect(result.report!.scannedDirectories)
            .toBeGreaterThan(0);

        expect(result.report!.nodeCount)
            .toBeGreaterThan(0);

        expect(result.report!.dependencyCount)
            .toBeGreaterThanOrEqual(0);

        expect(result.report!.violations.length)
            .toBeGreaterThanOrEqual(0);

    });

});
