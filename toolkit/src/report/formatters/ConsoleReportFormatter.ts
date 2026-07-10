import { AnalysisReport } from "../../engine/AnalysisReport.js";
import { ReportFormatter } from "../ReportFormatter.js";

export class ConsoleReportFormatter
    implements ReportFormatter {

    public format(
        report: AnalysisReport
    ): string {

        return [
            "",
            "ACKI Toolkit Analysis",
            "=====================",
            `Score: ${report.score}`,
            `Issues: ${report.issues.length}`,
            `Recommendations: ${report.recommendations.length}`,
            ""
        ].join("\n");

    }

}
