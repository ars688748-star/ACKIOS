import {
    AnalysisIssue,
    IssueCategory
} from "./AnalysisIssue.js";

export interface ScoreResult {

    total: number;

    categories:
        Partial<Record<IssueCategory, number>>;

}

export class ScoreCalculator {

    public calculate(
        issues: AnalysisIssue[]
    ): ScoreResult {

        const categories:
            Partial<Record<IssueCategory, number>> = {};

        const allCategories: IssueCategory[] = [

            "project",
            "documentation",
            "repository",
            "package",
            "dependencies",
            "typescript",
            "security",
            "quality"

        ];

        for (const category of allCategories) {

            categories[category] = 100;

        }

        let total = 100;

        for (const issue of issues) {

            const penalty =
                this.penalty(issue.severity);

            total -= penalty;

            categories[issue.category] =
                Math.max(
                    0,
                    (categories[issue.category] ?? 100)
                    - penalty
                );

        }

        return {

            total: Math.max(0, total),

            categories

        };

    }

    private penalty(
        severity: AnalysisIssue["severity"]
    ): number {

        switch (severity) {

            case "error":
                return 10;

            case "warning":
                return 5;

            default:
                return 1;

        }

    }

}
