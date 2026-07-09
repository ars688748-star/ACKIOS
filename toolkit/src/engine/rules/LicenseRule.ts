import { WorkspaceState } from "../../types/WorkspaceState.js";

import { AnalysisIssue } from "../AnalysisIssue.js";
import { Rule } from "../contracts/Rule.js";

export class LicenseRule implements Rule {

    public analyze(
        workspace: WorkspaceState
    ): AnalysisIssue[] {

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
