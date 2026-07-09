import { WorkspaceState } from "../../types/WorkspaceState.js";
import { RuleContext } from "../contracts/RuleContext.js";
import { RuleMetadata } from "../contracts/RuleMetadata.js";
import { RuleCategory } from "../contracts/RuleCategory.js";

import { AnalysisIssue } from "../AnalysisIssue.js";
import { Rule } from "../contracts/Rule.js";

export class EnginesRule implements Rule {

    public readonly metadata: RuleMetadata = {
        id: "EnginesRule",
        name: "EnginesRule",
        category: RuleCategory.Quality,
        description: "EnginesRule rule",
        version: "2.0.0",
        priority: 100
    };


    public analyze(context: RuleContext
    ): AnalysisIssue[] {

        const workspace = context.workspace;

        if (!workspace.package.exists) {
            return [];
        }

        const nodeVersion =
            workspace.package.engines.node?.trim() ?? "";

        if (nodeVersion.length > 0) {
            return [];
        }

        return [
            {
                id: "package.engines.node.missing",
                category: "package",
severity: "warning",
                title: "Node.js engine is missing",
                description:
                    "The package.json file does not define engines.node."
            }
        ];

    }

}

