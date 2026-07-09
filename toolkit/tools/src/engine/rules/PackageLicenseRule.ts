import { WorkspaceState } from "../../types/WorkspaceState.js";

import { AnalysisIssue } from "../AnalysisIssue.js";
import { Rule } from "../contracts/Rule.js";

export class PackageLicenseRule implements Rule {

    public analyze(
        workspace: WorkspaceState
    ): AnalysisIssue[] {

        if (!workspace.package.exists) {
            return [];
        }

        if (workspace.package.license.length > 0) {
            return [];
        }

        return [
            {
                id: "package.license",
                category: "package",
severity: "warning",
                title: "Package license missing",
                description: "package.json does not contain a license field."
            }
        ];

    }

}
