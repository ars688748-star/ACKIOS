import { WorkspaceState } from "../../types/WorkspaceState.js";
import { RuleContext } from "../contracts/RuleContext.js";
import { RuleMetadata } from "../contracts/RuleMetadata.js";
import { RuleCategory } from "../contracts/RuleCategory.js";

import { AnalysisIssue } from "../AnalysisIssue.js";
import { Rule } from "../contracts/Rule.js";

export class LicenseRule implements Rule {

    public readonly metadata: RuleMetadata = {
        id: "LicenseRule",
        name: "LicenseRule",
        category: RuleCategory.Quality,
        description: "LicenseRule rule",
        version: "2.0.0",
        priority: 100
    };


    public analyze(context: RuleContext
    ): AnalysisIssue[] {

        const workspace = context.workspace;

        const issues: AnalysisIssue[] = [];

        if (!workspace.structure.hasLicense) {

            issues.push({

                id: "project.license.file",
                category: "documentation",
severity: "warning",

                title: "LICENSE file is missing",

                description:
                    "The project does not contain a LICENSE file."

            });

        }

        if (!workspace.package.exists) {
            return issues;
        }

        const license =
            workspace.package.license.trim();

        if (
            license.length === 0 ||
            license === "UNLICENSED"
        ) {

            issues.push({

                id: "package.license",
                category: "documentation",
severity: "warning",

                title: "Package license is not specified",

                description:
                    "The package.json file does not contain a valid SPDX license identifier."

            });

        }

        return issues;

    }

}

