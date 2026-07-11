import fs from "node:fs";
import path from "node:path";

import { RepositoryLocator } from "./RepositoryLocator.js";
import { Scanner } from "./contracts/Scanner.js";

export interface EnvironmentScanResult {
    nodeVersion: string;
    platform: string;
    hasGit: boolean;
    hasTypeScript: boolean;
    repositoryRoot: string;
}

export class EnvironmentScanner implements Scanner<EnvironmentScanResult> {

    constructor(
        private readonly repositoryLocator: RepositoryLocator
    ) {}

    public scan(root: string): EnvironmentScanResult {

        const repositoryRoot = this.repositoryLocator.find(root);

        return {
            nodeVersion: process.version,
            platform: process.platform,
            hasGit: fs.existsSync(path.join(repositoryRoot, ".git")),
            hasTypeScript: fs.existsSync(path.join(root, "tsconfig.json")),
            repositoryRoot
        };

    }

}
