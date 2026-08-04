import { readFile, stat } from "node:fs/promises";

import type { SourceFile } from "./SourceFile.js";

const MAX_SOURCE_FILE_SIZE =
    10 * 1024 * 1024; // 10 MiB

export class SourceLoader {

    public async load(
        path: string
    ): Promise<SourceFile> {

        const info =
            await stat(path);

        if (info.size > MAX_SOURCE_FILE_SIZE) {

            return {

                path,

                content: ""

            };

        }

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
