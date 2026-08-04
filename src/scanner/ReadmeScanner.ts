import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

import { Scanner } from "./contracts/Scanner.js";

export interface ReadmeScanResult {

    exists: boolean;

    length: number;

    hasInstallation: boolean;

    hasUsage: boolean;

    hasLicense: boolean;

    hasContributing: boolean;

}

export class ReadmeScanner
    implements Scanner<ReadmeScanResult> {

    public scan(
        root: string
    ): ReadmeScanResult {

        const file =
            join(root, "README.md");

        if (!existsSync(file)) {

            return {

                exists: false,

                length: 0,

                hasInstallation: false,

                hasUsage: false,

                hasLicense: false,

                hasContributing: false

            };

        }

        const content =
            readFileSync(file, "utf8");

        const text =
            content.toLowerCase();

        return {

            exists: true,

            length: content.length,

            hasInstallation:
                text.includes("installation"),

            hasUsage:
                text.includes("usage"),

            hasLicense:
                text.includes("license"),

            hasContributing:
                text.includes("contributing")

        };

    }

}
