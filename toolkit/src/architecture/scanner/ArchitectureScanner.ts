import { readdir } from "node:fs/promises";
import { join } from "node:path";

import type { ArchitectureNode } from "../model/ArchitectureNode.js";

export class ArchitectureScanner {

    private readonly ignoredDirectories = new Set([

        "node_modules",

        ".git",

        "dist",

        "coverage",

        ".work"

    ]);

    public async scan(
        root: string
    ): Promise<ArchitectureNode[]> {

        const nodes: ArchitectureNode[] = [];

        await this.scanDirectory(
            root,
            nodes
        );

        return nodes;

    }

    private async scanDirectory(
        directory: string,
        nodes: ArchitectureNode[]
    ): Promise<void> {

        const entries = await readdir(
            directory,
            {
                withFileTypes: true
            }
        );

        for (const entry of entries) {


            if (

                entry.isDirectory() &&

                this.ignoredDirectories.has(
                    entry.name
                )

            ) {

                continue;

            }



            const path = join(
                directory,
                entry.name
            );

            nodes.push({

                name: entry.name,

                path,

                type: entry.isDirectory()
                    ? "directory"
                    : "file"

            });

            if (entry.isDirectory()) {

                await this.scanDirectory(
                    path,
                    nodes
                );

            }

        }

    }

}

