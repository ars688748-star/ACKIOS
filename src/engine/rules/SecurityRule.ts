import {} from "../../types/WorkspaceState.js";
import { RuleContext } from "../contracts/RuleContext.js";
import { RuleMetadata } from "../contracts/RuleMetadata.js";
import { RuleCategory } from "../contracts/RuleCategory.js";

import { AnalysisIssue } from "../AnalysisIssue.js";
import { Rule } from "../contracts/Rule.js";

export class SecurityRule implements Rule {

    public readonly metadata: RuleMetadata = {
        id: "SecurityRule",
        name: "SecurityRule",
        category: RuleCategory.Quality,
        description: "SecurityRule rule",
        version: "2.0.0",
        priority: 100
    };


    public analyze(context: RuleContext
    ): AnalysisIssue[] {

        const _workspace = context.workspace;

        return [];

    }

}




