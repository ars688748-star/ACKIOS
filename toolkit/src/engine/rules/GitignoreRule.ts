import { WorkspaceState } from "../../types/WorkspaceState.js";

import { AnalysisIssue } from "../AnalysisIssue.js";
import { Rule } from "../contracts/Rule.js";

export class GitignoreRule implements Rule {

    public analyze(
        workspace: WorkspaceState
    ): AnalysisIssue[] {

        if (workspace.structure.hasGitignore) {
            return [];
        }

        return [

            {

                id: "repository.gitignore",

                category: "repository",

                severity: "warning",

                title: ".gitignore is missing",

                description:
                    "The repository does not contain a .gitignore file."

            }

        ];

    }

}
