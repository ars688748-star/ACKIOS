import { describe, expect, it } from "vitest";

import { ArchitectureAnalysisEngine } from "../ArchitectureAnalysisEngine.js";

describe("ArchitectureAnalysisEngine", () => {

    it("returns empty architecture report", async () => {

        const engine = new ArchitectureAnalysisEngine();

        const report = await engine.analyze("src");

        expect(report.scannedFiles).toBe(0);
        expect(report.scannedDirectories).toBe(0);
        expect(report.violations).toEqual([]);

    });

});
