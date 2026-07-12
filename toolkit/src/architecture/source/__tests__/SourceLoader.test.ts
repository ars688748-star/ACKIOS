import { describe, expect, it } from "vitest";
import { writeFile, rm } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";

import { SourceLoader } from "../SourceLoader.js";

describe("SourceLoader", () => {

    it("loads source file", async () => {

        const path = join(
            tmpdir(),
            "ackios-source-loader-test.ts"
        );

        await writeFile(
            path,
            "export const value = 42;",
            "utf8"
        );

        const loader = new SourceLoader();

        const source =
            await loader.load(path);

        expect(source.path).toBe(path);

        expect(source.content)
            .toContain("value = 42");

        await rm(path);

    });

});
