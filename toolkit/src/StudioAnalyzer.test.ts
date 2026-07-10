import { describe, expect, it } from "vitest";

import {
    mkdtempSync,
    mkdirSync,
    writeFileSync
} from "node:fs";

import { join } from "node:path";
import { tmpdir } from "node:os";

import { StudioAnalyzer } from "./index.js";

describe("StudioAnalyzer", () => {

    it("should analyze workspace", async () => {

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

        const analyzer = new StudioAnalyzer();

        const report = await analyzer.analyze(workspace);

        expect(report.intelligence).toBeDefined();
        expect(report.recommendations).toBeDefined();

    });

});

