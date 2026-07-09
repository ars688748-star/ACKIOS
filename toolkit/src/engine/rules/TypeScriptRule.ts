import { WorkspaceState } from "../../types/WorkspaceState.js";
import { RuleContext } from "../contracts/RuleContext.js";
import { RuleMetadata } from "../contracts/RuleMetadata.js";
import { RuleCategory } from "../contracts/RuleCategory.js";

import { AnalysisIssue } from "../AnalysisIssue.js";
import { Rule } from "../contracts/Rule.js";

export class TypeScriptRule implements Rule {

    public readonly metadata: RuleMetadata = {
        id: "TypeScriptRule",
        name: "TypeScriptRule",
        category: RuleCategory.Quality,
        description: "TypeScriptRule rule",
        version: "2.0.0",
        priority: 100
    };


    public analyze(context: RuleContext
    ): AnalysisIssue[] {

        const workspace = context.workspace;

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

