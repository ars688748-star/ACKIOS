import { WorkspaceState } from "../../types/WorkspaceState.js";
import { RuleContext } from "../contracts/RuleContext.js";
import { RuleMetadata } from "../contracts/RuleMetadata.js";
import { RuleCategory } from "../contracts/RuleCategory.js";

import { AnalysisIssue } from "../AnalysisIssue.js";
import { Rule } from "../contracts/Rule.js";

export class GitRepositoryRule implements Rule {

    public readonly metadata: RuleMetadata = {
        id: "GitRepositoryRule",
        name: "GitRepositoryRule",
        category: RuleCategory.Quality,
        description: "GitRepositoryRule rule",
        version: "2.0.0",
        priority: 100
    };


    public analyze(context: RuleContext
    ): AnalysisIssue[] {

        const workspace = context.workspace;

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

