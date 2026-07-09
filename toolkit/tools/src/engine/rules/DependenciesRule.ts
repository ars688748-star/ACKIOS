import { WorkspaceState } from "../../types/WorkspaceState.js";

import { AnalysisIssue } from "../AnalysisIssue.js";
import { Rule } from "../contracts/Rule.js";

export class DependenciesRule implements Rule {

    public analyze(
        workspace: WorkspaceState
    ): AnalysisIssue[] {

        const issues: AnalysisIssue[] = [];

        const production =
            workspace.dependencies.production;

        const development =
            workspace.dependencies.development;

        if (production.length === 0) {

            issues.push({

                id: "dependencies.production.empty",

                category: "dependencies",

                severity: "info",

                title: "No production dependencies",

                description:
                    "The project does not contain production dependencies."

            });

        }

        if (development.length === 0) {

            issues.push({

                id: "dependencies.development.empty",

                category: "dependencies",

                severity: "warning",

                title: "No development dependencies",

                description:
                    "The project does not contain development dependencies."

            });

        }

        if (production.length > 50) {

            issues.push({

                id: "dependencies.production.large",

                category: "dependencies",

                severity: "warning",

                title: "Large number of dependencies",

                description:
                    "The project contains more than 50 production dependencies."

            });

        }

        return issues;

    }

}
