import fs from "node:fs";
import path from "node:path";

import { Scanner } from "./contracts/Scanner.js";

export interface PackageScanResult {

    exists: boolean;

    name: string;
    version: string;

    private: boolean;

    license: string;

    repository: string;
    homepage: string;

    packageManager: string;

    engines: Record<string, string>;

    scripts: Record<string, string>;

    keywords: string[];

}

export class PackageScanner
    implements Scanner<PackageScanResult> {

    public scan(root: string): PackageScanResult {

        const file = path.join(root, "package.json");

        if (!fs.existsSync(file)) {
            return this.empty();
        }

        try {

            const json = JSON.parse(
                fs.readFileSync(file, "utf8")
            );

            return {

                exists: true,

                name: json.name ?? "",
                version: json.version ?? "",

                private: json.private ?? false,

                license: json.license ?? "",

                repository:
                    typeof json.repository === "string"
                        ? json.repository
                        : json.repository?.url ?? "",

                homepage: json.homepage ?? "",

                packageManager:
                    json.packageManager ?? "",

                engines:
                    json.engines ?? {},

                scripts:
                    json.scripts ?? {},

                keywords:
                    json.keywords ?? []

            };

        }
        catch {

            return this.empty();

        }

    }

    private empty(): PackageScanResult {

        return {

            exists: false,

            name: "",
            version: "",

            private: false,

            license: "",

            repository: "",
            homepage: "",

            packageManager: "",

            engines: {},

            scripts: {},

            keywords: []

        };

    }

}
