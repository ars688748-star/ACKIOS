import { WorkspaceState } from "../../types/WorkspaceState.js";
import { RuleContext } from "../contracts/RuleContext.js";
import { RuleMetadata } from "../contracts/RuleMetadata.js";
import { RuleCategory } from "../contracts/RuleCategory.js";

import { AnalysisIssue } from "../AnalysisIssue.js";
import { Rule } from "../contracts/Rule.js";

export class PackageManagerRule implements Rule {

    public readonly metadata: RuleMetadata = {
        id: "PackageManagerRule",
        name: "PackageManagerRule",
        category: RuleCategory.Quality,
        description: "PackageManagerRule rule",
        version: "2.0.0",
        priority: 100
    };


    public analyze(context: RuleContext
    ): AnalysisIssue[] {

        const workspace = context.workspace;

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

