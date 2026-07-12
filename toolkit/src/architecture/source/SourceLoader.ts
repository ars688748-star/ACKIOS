import { readFile } from "node:fs/promises";

import type { SourceFile } from "./SourceFile.js";

export class SourceLoader {

    public async load(
        path: string
    ): Promise<SourceFile> {

        const content =
            await readFile(
                path,
                "utf8"
            );

        return {

            path,

            content

        };

    }

}
