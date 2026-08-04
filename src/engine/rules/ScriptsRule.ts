import {} from "../../types/WorkspaceState.js";
import { RuleContext } from "../contracts/RuleContext.js";
import { RuleMetadata } from "../contracts/RuleMetadata.js";
import { RuleCategory } from "../contracts/RuleCategory.js";

import { AnalysisIssue } from "../AnalysisIssue.js";
import { Rule } from "../contracts/Rule.js";

export class ScriptsRule implements Rule {

    public readonly metadata: RuleMetadata = {
        id: "ScriptsRule",
        name: "ScriptsRule",
        category: RuleCategory.Quality,
        description: "ScriptsRule rule",
        version: "2.0.0",
        priority: 100
    };


    public analyze(context: RuleContext
    ): AnalysisIssue[] {

        const workspace = context.workspace;

        const issues: AnalysisIssue[] = [];

        if (!workspace.package.exists) {
            return issues;
        }

        const scripts = workspace.package.scripts;

        this.checkScript(
            issues,
            scripts,
            "build"
        );

        this.checkScript(
            issues,
            scripts,
            "test"
        );

        this.checkScript(
            issues,
            scripts,
            "lint"
        );

        this.checkScript(
            issues,
            scripts,
            "format"
        );

        this.checkScript(
            issues,
            scripts,
            "dev"
        );

        return issues;

    }

    private checkScript(
        issues: AnalysisIssue[],
        scripts: Record<string, string>,
        name: string
    ): void {

        if (scripts[name]) {
            return;
        }

        issues.push({

            id: `package.scripts.${name}`,

            category: "package",

            severity: "info",

            title: `Missing "${name}" script`,

            description:
                `package.json does not define the "${name}" script.`

        });

    }

}


