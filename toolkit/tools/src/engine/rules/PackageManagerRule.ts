import { WorkspaceState } from "../../types/WorkspaceState.js";

import { AnalysisIssue } from "../AnalysisIssue.js";
import { Rule } from "../contracts/Rule.js";

export class PackageManagerRule implements Rule {

    public analyze(
        workspace: WorkspaceState
    ): AnalysisIssue[] {

        if (!workspace.package.exists) {
            return [];
        }

        if (workspace.package.packageManager.trim().length > 0) {
            return [];
        }

        return [
            {
                id: "package.packageManager.missing",
                category: "package",
severity: "warning",
                title: "Package manager is missing",
                description:
                    "The package.json file does not define the packageManager field."
            }
        ];

    }

}
