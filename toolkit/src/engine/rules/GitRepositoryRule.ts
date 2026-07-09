import { WorkspaceState } from "../../types/WorkspaceState.js";

import { AnalysisIssue } from "../AnalysisIssue.js";
import { Rule } from "../contracts/Rule.js";

export class GitRepositoryRule implements Rule {

    public analyze(
        workspace: WorkspaceState
    ): AnalysisIssue[] {

        if (workspace.git.hasRepository) {
            return [];
        }

        return [
            {
                id: "git.repository",
                category: "repository",
severity: "error",
                title: "Git repository missing",
                description: "Project is not inside a Git repository."
            }
        ];

    }

}
