import { execSync } from "node:child_process";

import { Scanner } from "./contracts/Scanner.js";

export interface GitScanResult {
    hasRepository: boolean;
    branch: string;
    remoteUrl: string;
    commit: string;
}

export class GitScanner implements Scanner<GitScanResult> {

    public scan(root: string): GitScanResult {

        try {

            const branch = execSync(
                "git branch --show-current",
                { cwd: root, encoding: "utf8" }
            ).trim();

            let remoteUrl = "";

            try {
                remoteUrl = execSync(
                    "git remote get-url origin",
                    { cwd: root, encoding: "utf8" }
                ).trim();
            } catch {
                remoteUrl = "";
            }

            const commit = execSync(
                "git rev-parse --short HEAD",
                { cwd: root, encoding: "utf8" }
            ).trim();

            return {
                hasRepository: true,
                branch,
                remoteUrl,
                commit
            };

        } catch {

            return {
                hasRepository: false,
                branch: "",
                remoteUrl: "",
                commit: ""
            };

        }

    }

}
