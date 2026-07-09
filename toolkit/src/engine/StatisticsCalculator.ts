import { AnalysisIssue } from "./AnalysisIssue.js";

import { AnalysisStatistics } from "./AnalysisReport.js";

export class StatisticsCalculator {

    public calculate(
        issues: AnalysisIssue[]
    ): AnalysisStatistics {

        return {

            issues: issues.length,

            recommendations: 0,

            groups: 0,

            errors:
                issues.filter(
                    i => i.severity === "error"
                ).length,

            warnings:
                issues.filter(
                    i => i.severity === "warning"
                ).length,

            infos:
                issues.filter(
                    i => i.severity === "info"
                ).length

        };

    }

}
