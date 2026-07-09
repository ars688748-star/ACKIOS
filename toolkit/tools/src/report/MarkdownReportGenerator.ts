import { AnalysisReport } from "../engine/AnalysisReport.js";

import { ReportGenerator } from "./contracts/ReportGenerator.js";

export class MarkdownReportGenerator
    implements ReportGenerator {

    public generate(
        report: AnalysisReport
    ): string {

        return [
            "# ACKI Report",
            "",
            `Score: ${report.score}/100`,
            "",
            "## Summary",
            "",
            report.summary
        ].join("\n");

    }

}
