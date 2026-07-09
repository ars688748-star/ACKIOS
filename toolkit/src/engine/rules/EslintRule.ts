import { WorkspaceState } from "../../types/WorkspaceState.js";

import { AnalysisIssue } from "../AnalysisIssue.js";
import { Rule } from "../contracts/Rule.js";

export class EslintRule implements Rule {

    public analyze(
        workspace: WorkspaceState
    ): AnalysisIssue[] {

        if (!workspace.eslint.exists) {

            return [
                {
                    id: "project.eslint.missing",
                    category: "quality",
                    severity: "warning",
                    title: "ESLint configuration missing",
                    description:
                        "No ESLint configuration was found."
                }
            ];

        }

        if (workspace.eslint.legacyConfig) {

            return [
                {
                    id: "project.eslint.legacy",
                    category: "quality",
                    severity: "info",
                    title: "Legacy ESLint configuration",
                    description:
                        "Consider migrating to Flat Config (eslint.config.js)."
                }
            ];

        }

        if (!workspace.eslint.hasTypeScriptSupport &&
            workspace.framework.typescript) {

            return [
                {
                    id: "project.eslint.typescript",
                    category: "quality",
                    severity: "warning",
                    title: "TypeScript ESLint is not configured",
                    description:
                        "typescript-eslint was not detected in the ESLint configuration."
                }
            ];

        }

        return [];

        return [
            {
                id: "project.eslint.missing",
                category: "quality",
                severity: "warning",
                title: "ESLint configuration missing",
                description:
                    "No ESLint configuration was found."
            }
        ];

    }

}
