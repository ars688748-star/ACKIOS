import {} from "../../types/WorkspaceState.js";
import { RuleContext } from "../contracts/RuleContext.js";
import { RuleMetadata } from "../contracts/RuleMetadata.js";
import { RuleCategory } from "../contracts/RuleCategory.js";

import { AnalysisIssue } from "../AnalysisIssue.js";
import { Rule } from "../contracts/Rule.js";

export class RepositoryRule implements Rule {

    public readonly metadata: RuleMetadata = {
        id: "RepositoryRule",
        name: "RepositoryRule",
        category: RuleCategory.Quality,
        description: "RepositoryRule rule",
        version: "2.0.0",
        priority: 100
    };


    public analyze(context: RuleContext
    ): AnalysisIssue[] {

        const workspace = context.workspace;

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


