import { WorkspaceState } from "../types/WorkspaceState.js";

import { AnalysisIssue } from "./AnalysisIssue.js";
import { Rule } from "./contracts/Rule.js";

export class RuleEngine {

    private readonly rules: Rule[];

    public constructor(rules: Rule[]) {

        this.rules = rules;

    }

    public analyze(
        workspace: WorkspaceState
    ): AnalysisIssue[] {

        const issues: AnalysisIssue[] = [];

        for (const rule of this.rules) {

            issues.push(
                ...rule.analyze(workspace)
            );

        }

        return issues;

    }

}
