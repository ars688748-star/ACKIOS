import { WorkspaceState } from "../../types/WorkspaceState.js";

import { AnalysisIssue } from "../AnalysisIssue.js";
import { Rule } from "../contracts/Rule.js";

export class EnginesRule implements Rule {

    public analyze(
        workspace: WorkspaceState
    ): AnalysisIssue[] {

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
