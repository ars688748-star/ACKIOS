import {} from "../../types/WorkspaceState.js";
import { RuleContext } from "../contracts/RuleContext.js";
import { RuleMetadata } from "../contracts/RuleMetadata.js";
import { RuleCategory } from "../contracts/RuleCategory.js";

import { AnalysisIssue } from "../AnalysisIssue.js";
import { Rule } from "../contracts/Rule.js";

export class PackageLicenseRule implements Rule {

    public readonly metadata: RuleMetadata = {
        id: "PackageLicenseRule",
        name: "PackageLicenseRule",
        category: RuleCategory.Quality,
        description: "PackageLicenseRule rule",
        version: "2.0.0",
        priority: 100
    };


    public analyze(context: RuleContext
    ): AnalysisIssue[] {

        const workspace = context.workspace;

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


