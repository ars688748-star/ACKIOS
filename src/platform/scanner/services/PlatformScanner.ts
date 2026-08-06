import { promises as fs } from "node:fs";
import path from "node:path";

import { IScanner } from "./IScanner.js";
import { ScanOptions } from "../models/ScanOptions.js";
import { ScanResult } from "../models/ScanResult.js";

export class PlatformScanner implements IScanner {

    public async scan(
        options: ScanOptions
    ): Promise<ScanResult> {

        const files: string[] = [];

        await this.walk(
            options.root,
            options,
            files
        );

        return {
            files
        };

    }

    private async walk(
        directory: string,
        options: ScanOptions,
        files: string[]
    ): Promise<void> {

        const entries =
            await fs.readdir(
                directory,
                {
                    withFileTypes: true
                }
            );

        for (const entry of entries) {

            const full =
                path.join(
                    directory,
                    entry.name
                );

            if (entry.isDirectory()) {

                if (
                    options.excludedDirectories.includes(
                        entry.name
                    )
                ) {
                    continue;
                }

                await this.walk(
                    full,
                    options,
                    files
                );

                continue;

            }

            if (
                options.extensions.some(
                    extension => full.endsWith(extension)
                )
            ) {

                files.push(full);

            }

        }

    }

}
