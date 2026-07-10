import { readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

import { ProjectStructure } from "./architecture/index.js";

export class StructureScanner {

    scan(root: string): ProjectStructure {

        const directories: string[] = [];
        const files: string[] = [];

        this.walk(root, root, directories, files);

        return {
            directories,
            files
        };

    }

    private walk(
        root: string,
        current: string,
        directories: string[],
        files: string[]
    ): void {

        for (const entry of readdirSync(current)) {

            const full = join(current, entry);

            const relativePath = relative(root, full).replace(/\\/g, "/");

            const stat = statSync(full);

            if (stat.isDirectory()) {

                directories.push(relativePath);

                this.walk(root, full, directories, files);

            } else {

                files.push(relativePath);

            }

        }

    }

}
