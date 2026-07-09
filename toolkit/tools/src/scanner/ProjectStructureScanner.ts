import fs from "node:fs";
import path from "node:path";

import { Scanner } from "./contracts/Scanner.js";

export interface ProjectStructureInfo {
    hasReadme: boolean;
    hasLicense: boolean;
    hasGitignore: boolean;
    hasEditorConfig: boolean;
}

export class ProjectStructureScanner implements Scanner<ProjectStructureInfo> {

    public scan(root: string): ProjectStructureInfo {

        return {
            hasReadme: fs.existsSync(path.join(root, "README.md")),
            hasLicense: fs.existsSync(path.join(root, "LICENSE")),
            hasGitignore: fs.existsSync(path.join(root, ".gitignore")),
            hasEditorConfig: fs.existsSync(path.join(root, ".editorconfig"))
        };

    }

}
