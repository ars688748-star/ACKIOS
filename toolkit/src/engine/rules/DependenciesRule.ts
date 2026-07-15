import {} from "../../types/WorkspaceState.js";
import { RuleContext } from "../contracts/RuleContext.js";
import { RuleMetadata } from "../contracts/RuleMetadata.js";
import { RuleCategory } from "../contracts/RuleCategory.js";

import { AnalysisIssue } from "../AnalysisIssue.js";
import { Rule } from "../contracts/Rule.js";

export class DependenciesRule implements Rule {

    public readonly metadata: RuleMetadata = {
        id: "DependenciesRule",
        name: "DependenciesRule",
        category: RuleCategory.Quality,
        description: "DependenciesRule rule",
        version: "2.0.0",
        priority: 100
    };


    public analyze(context: RuleContext
    ): AnalysisIssue[] {

        const workspace = context.workspace;

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


