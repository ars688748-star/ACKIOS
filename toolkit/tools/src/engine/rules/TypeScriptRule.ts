import { WorkspaceState } from "../../types/WorkspaceState.js";

import { AnalysisIssue } from "../AnalysisIssue.js";
import { Rule } from "../contracts/Rule.js";

export class TypeScriptRule implements Rule {

    public analyze(
        workspace: WorkspaceState
    ): AnalysisIssue[] {

        const issues: AnalysisIssue[] = [];

        const ts = workspace.typescript;

        if (!ts.exists) {

            issues.push({
                id: "typescript.config",
                category: "typescript",
severity: "warning",
                title: "tsconfig.json missing",
                description: "Project does not contain tsconfig.json."
            });

            return issues;

        }

        if (!ts.strict) {

            issues.push({
                id: "typescript.strict",
                category: "typescript",
severity: "warning",
                title: "Strict mode disabled",
                description: "Enable compilerOptions.strict."
            });

        }

        if (!ts.noImplicitAny) {

            issues.push({
                id: "typescript.noImplicitAny",
                category: "typescript",
severity: "warning",
                title: "noImplicitAny disabled",
                description: "Enable compilerOptions.noImplicitAny."
            });

        }

        if (!ts.noUnusedLocals) {

            issues.push({
                id: "typescript.noUnusedLocals",
                category: "typescript",
severity: "info",
                title: "Unused locals are not checked",
                description: "Enable compilerOptions.noUnusedLocals."
            });

        }

        if (!ts.noUnusedParameters) {

            issues.push({
                id: "typescript.noUnusedParameters",
                category: "typescript",
severity: "info",
                title: "Unused parameters are not checked",
                description: "Enable compilerOptions.noUnusedParameters."
            });

        }

        if (!ts.forceConsistentCasingInFileNames) {

            issues.push({
                id: "typescript.casing",
                category: "typescript",
severity: "info",
                title: "Filename casing check disabled",
                description: "Enable forceConsistentCasingInFileNames."
            });

        }

        if (!ts.skipLibCheck) {

            issues.push({
                id: "typescript.skipLibCheck",
                category: "typescript",
severity: "info",
                title: "skipLibCheck disabled",
                description: "Consider enabling skipLibCheck for faster builds."
            });

        }

        return issues;

    }

}
