import { WorkspaceState } from "../../types/WorkspaceState.js";
import { RuleContext } from "../contracts/RuleContext.js";
import { RuleMetadata } from "../contracts/RuleMetadata.js";
import { RuleCategory } from "../contracts/RuleCategory.js";

import { AnalysisIssue } from "../AnalysisIssue.js";
import { Rule } from "../contracts/Rule.js";

export class TsConfigRule implements Rule {

    public readonly metadata: RuleMetadata = {
        id: "TsConfigRule",
        name: "TsConfigRule",
        category: RuleCategory.Quality,
        description: "TsConfigRule rule",
        version: "2.0.0",
        priority: 100
    };


    public analyze(context: RuleContext
    ): AnalysisIssue[] {

        const workspace = context.workspace;

        const issues: AnalysisIssue[] = [];

        if (!workspace.typescript.exists) {

            issues.push({
                id: "typescript.tsconfig.missing",
                category: "typescript",
                severity: "error",
                title: "tsconfig.json is missing",
                description:
                    "The project does not contain a tsconfig.json file."
            });

            return issues;

        }

        this.check(
            issues,
            workspace.typescript.strict,
            "typescript.strict",
            "Strict mode is disabled",
            "Enable compilerOptions.strict.",
            "warning"
        );

        this.check(
            issues,
            workspace.typescript.noImplicitAny,
            "typescript.noImplicitAny",
            "noImplicitAny is disabled",
            "Enable compilerOptions.noImplicitAny.",
            "warning"
        );

        this.check(
            issues,
            workspace.typescript.noUnusedLocals,
            "typescript.noUnusedLocals",
            "noUnusedLocals is disabled",
            "Enable compilerOptions.noUnusedLocals.",
            "info"
        );

        this.check(
            issues,
            workspace.typescript.noUnusedParameters,
            "typescript.noUnusedParameters",
            "Enable compilerOptions.noUnusedParameters.",
            "Enable compilerOptions.noUnusedParameters.",
            "info"
        );

        this.check(
            issues,
            workspace.typescript.noUncheckedIndexedAccess,
            "typescript.noUncheckedIndexedAccess",
            "noUncheckedIndexedAccess is disabled",
            "Enable compilerOptions.noUncheckedIndexedAccess.",
            "info"
        );

        this.check(
            issues,
            workspace.typescript.exactOptionalPropertyTypes,
            "typescript.exactOptionalPropertyTypes",
            "exactOptionalPropertyTypes is disabled",
            "Enable compilerOptions.exactOptionalPropertyTypes.",
            "info"
        );

        this.check(
            issues,
            workspace.typescript.isolatedModules,
            "typescript.isolatedModules",
            "isolatedModules is disabled",
            "Enable compilerOptions.isolatedModules.",
            "info"
        );

        return issues;

    }

    private check(
        issues: AnalysisIssue[],
        enabled: boolean,
        id: string,
        title: string,
        description: string,
        severity: AnalysisIssue["severity"]
    ): void {

        if (enabled) {
            return;
        }

        issues.push({

            id,

            category: "typescript",

            severity,

            title,

            description

        });

    }

}

