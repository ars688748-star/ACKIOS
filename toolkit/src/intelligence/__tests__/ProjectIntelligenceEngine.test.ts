import { describe, expect, it } from "vitest";

import {
    mkdtempSync,
    mkdirSync,
    writeFileSync
} from "node:fs";

import { join } from "node:path";
import { tmpdir } from "node:os";

import { ProjectIntelligenceEngine } from "../index.js";

describe("ProjectIntelligenceEngine", () => {

    it("should analyze complete project", async () => {

        const workspace = mkdtempSync(join(tmpdir(), "acki-"));

        mkdirSync(join(workspace, "src"));
        mkdirSync(join(workspace, "src/components"));
        mkdirSync(join(workspace, "tests"));

        writeFileSync(join(workspace, "eslint.config.js"), "");
        writeFileSync(join(workspace, ".prettierrc"), "");

        writeFileSync(
            join(workspace, "package.json"),
            JSON.stringify({

                dependencies: {
                    react: "^19.0.0"
                },

                devDependencies: {
                    typescript: "^5.9.0"
                }

            })
        );

        const engine = new ProjectIntelligenceEngine();

        const report = await engine.analyze(workspace);

        expect(report.summary.overallScore).toBeGreaterThan(0);
        expect(report.dependencies.total).toBe(2);
        expect(report.risks.score).toBeGreaterThanOrEqual(0);
        expect(report.architecture.score).toBeGreaterThan(0);

    });

});
