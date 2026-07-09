import fs from "node:fs";
import path from "node:path";

import { WorkspaceState } from "../types/WorkspaceState.js";
import { ScannerPipeline } from "./ScannerPipeline.js";

export class ProjectScanner {

    public scan(root: string): WorkspaceState {

        const packageJson = path.join(root, "package.json");

        if (!fs.existsSync(packageJson)) {
            throw new Error("package.json not found.");
        }

        const pkg = JSON.parse(
            fs.readFileSync(packageJson, "utf8")
        );

        const pipeline = new ScannerPipeline();

        return {
            project: {
                name: pkg.name ?? "unknown",
                version: pkg.version ?? "0.0.0",
                root
            },
            ...pipeline.execute(root)
        };

    }

}
