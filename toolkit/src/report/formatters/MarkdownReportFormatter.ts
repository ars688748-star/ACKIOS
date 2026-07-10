import { AnalysisReport } from "../../engine/AnalysisReport.js";
import { ReportFormatter } from "../ReportFormatter.js";

export class MarkdownReportFormatter implements ReportFormatter {

    public format(
        report: AnalysisReport
    ): string {

        return [
            "# ACKI Toolkit Report",
            "",
            `Score: ${report.score}`,
            `Issues: ${report.issues.length}`,
            `Recommendations: ${report.recommendations.length}`
        ].join("\n");

    }

}
