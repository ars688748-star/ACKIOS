import { WorkspaceState } from "../../types/WorkspaceState.js";

import { AnalysisIssue } from "../AnalysisIssue.js";
import { Rule } from "../contracts/Rule.js";

export class ReadmeRule implements Rule {

    public analyze(
        workspace: WorkspaceState
    ): AnalysisIssue[] {

        const issues: AnalysisIssue[] = [];

        if (!workspace.readme.exists) {

            issues.push({

                id: "project.readme.file",

                category: "documentation",

                severity: "warning",

                title: "README.md is missing",

                description:
                    "The project does not contain a README.md file."

            });

            return issues;

        }

        if (workspace.readme.length < 500) {

            issues.push({

                id: "project.readme.short",

                category: "documentation",

                severity: "info",

                title: "README is too short",

                description:
                    "Consider expanding the README with more project documentation."

            });

        }

        if (!workspace.readme.hasInstallation) {

            issues.push({

                id: "project.readme.installation",

                category: "documentation",

                severity: "info",

                title: "Installation section missing",

                description:
                    "Add an Installation section to README."

            });

        }

        if (!workspace.readme.hasUsage) {

            issues.push({

                id: "project.readme.usage",

                category: "documentation",

                severity: "info",

                title: "Usage section missing",

                description:
                    "Add a Usage section to README."

            });

        }

        if (!workspace.readme.hasLicense) {

            issues.push({

                id: "project.readme.license",

                category: "documentation",

                severity: "info",

                title: "License section missing",

                description:
                    "Add a License section to README."

            });

        }

        if (!workspace.readme.hasContributing) {

            issues.push({

                id: "project.readme.contributing",

                category: "documentation",

                severity: "info",

                title: "Contributing section missing",

                description:
                    "Add a Contributing section to README."

            });

        }

        return issues;

    }

}
