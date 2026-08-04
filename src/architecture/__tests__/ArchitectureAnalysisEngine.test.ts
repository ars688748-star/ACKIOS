import { describe, expect, it } from "vitest";

import { ArchitectureAnalysisEngine } from "../ArchitectureAnalysisEngine.js";

describe("ArchitectureAnalysisEngine", () => {

    it("analyzes workspace structure", async () => {

        const engine = new ArchitectureAnalysisEngine();

        const report = await engine.analyze("src");

        expect(report.scannedFiles)
            .toBeGreaterThan(0);

        expect(report.scannedDirectories)
            .toBeGreaterThan(0);

        expect(report.nodeCount)
            .toBeGreaterThan(0);

        expect(report.dependencyCount)
            .toBeGreaterThanOrEqual(0);

        expect(report.violations.length)
            .toBeGreaterThanOrEqual(0);

    });

});
