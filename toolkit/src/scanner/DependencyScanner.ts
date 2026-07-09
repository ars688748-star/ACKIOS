import fs from "node:fs";
import path from "node:path";

import { Scanner } from "./contracts/Scanner.js";

export interface DependencyInfo {
    production: string[];
    development: string[];
    peer: string[];
    optional: string[];
}

export class DependencyScanner implements Scanner<DependencyInfo> {

    public scan(root: string): DependencyInfo {

        const packageFile = path.join(root, "package.json");

        if (!fs.existsSync(packageFile)) {
            throw new Error("package.json not found.");
        }

        const pkg = JSON.parse(
            fs.readFileSync(packageFile, "utf8")
        );

        return {
            production: Object.keys(pkg.dependencies ?? {}),
            development: Object.keys(pkg.devDependencies ?? {}),
            peer: Object.keys(pkg.peerDependencies ?? {}),
            optional: Object.keys(pkg.optionalDependencies ?? {})
        };

    }

}
