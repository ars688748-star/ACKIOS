import { WorkspaceState } from "../../types/WorkspaceState.js";

import { AnalysisIssue } from "../AnalysisIssue.js";
import { Rule } from "../contracts/Rule.js";

export class RepositoryRule implements Rule {

    public analyze(
        workspace: WorkspaceState
    ): AnalysisIssue[] {

        if (!workspace.package.exists) {
            return [];
        }

        if (workspace.package.repository.trim().length > 0) {
            return [];
        }

        return [
            {
                id: "package.repository.missing",
                category: "repository",
severity: "warning",
                title: "Repository is missing",
                description:
                    "The package.json file does not define the repository field."
            }
        ];

    }

}
