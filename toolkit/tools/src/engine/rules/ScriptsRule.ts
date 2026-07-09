import { WorkspaceState } from "../../types/WorkspaceState.js";

import { AnalysisIssue } from "../AnalysisIssue.js";
import { Rule } from "../contracts/Rule.js";

export class ScriptsRule implements Rule {

    public analyze(
        workspace: WorkspaceState
    ): AnalysisIssue[] {

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
