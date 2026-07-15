import {} from "../../types/WorkspaceState.js";
import { RuleContext } from "../contracts/RuleContext.js";
import { RuleMetadata } from "../contracts/RuleMetadata.js";
import { RuleCategory } from "../contracts/RuleCategory.js";

import { AnalysisIssue } from "../AnalysisIssue.js";
import { Rule } from "../contracts/Rule.js";

export class GitignoreRule implements Rule {

    public readonly metadata: RuleMetadata = {
        id: "GitignoreRule",
        name: "GitignoreRule",
        category: RuleCategory.Quality,
        description: "GitignoreRule rule",
        version: "2.0.0",
        priority: 100
    };


    public analyze(context: RuleContext
    ): AnalysisIssue[] {

        const workspace = context.workspace;

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


