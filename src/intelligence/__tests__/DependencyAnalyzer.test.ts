import { describe, expect, it } from "vitest";

import { mkdtempSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";

import { DependencyAnalyzer } from "../index.js";
import { JsonService } from "../../services/JsonService.js";

describe("DependencyAnalyzer", () => {

    it("should read dependencies", () => {

        const workspace = mkdtempSync(join(tmpdir(), "acki-"));

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

        const analyzer =
            new DependencyAnalyzer(
                new JsonService()
            );

        const report =
            analyzer.analyze(workspace);

        expect(report.total).toBe(2);

    });

});
