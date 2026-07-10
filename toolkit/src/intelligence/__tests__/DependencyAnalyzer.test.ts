import { describe, expect, it } from "vitest";

import { mkdtempSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";

import { DependencyAnalyzer } from "../index.js";

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

        const analyzer = new DependencyAnalyzer();

        const report = analyzer.analyze(workspace);

        expect(report.total).toBe(2);

    });

});
