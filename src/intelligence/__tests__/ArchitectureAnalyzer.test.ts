import { describe, expect, it } from "vitest";

import { mkdtempSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";

import {
    ArchitectureAnalyzer,
    ArchitectureType
} from "../index.js";

import { StructureScanner } from "../StructureScanner.js";

describe("ArchitectureAnalyzer", () => {

    it("should detect layered architecture", async () => {

        const workspace = mkdtempSync(join(tmpdir(), "acki-"));

        mkdirSync(join(workspace, "src"));
        mkdirSync(join(workspace, "src/components"));
        mkdirSync(join(workspace, "src/services"));
        mkdirSync(join(workspace, "src/domain"));
        mkdirSync(join(workspace, "tests"));

        writeFileSync(join(workspace, "eslint.config.js"), "");
        writeFileSync(join(workspace, ".prettierrc"), "");

        const analyzer =
            new ArchitectureAnalyzer(
                new StructureScanner()
            );

        const report =
            await analyzer.analyze(workspace);

        expect(report.architecture)
            .not.toBe(ArchitectureType.Unknown);

        expect(report.score)
            .toBeGreaterThan(0);

    });

});
