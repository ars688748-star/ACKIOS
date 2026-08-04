import { AnalysisReport } from "../../engine/AnalysisReport.js";
import { ReportFormatter } from "../ReportFormatter.js";

export class HtmlReportFormatter implements ReportFormatter {

    public format(
        report: AnalysisReport
    ): string {

        return `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>ACKI Report</title>
</head>
<body>
<h1>ACKI Toolkit Report</h1>
<p>Score: ${report.score}</p>
<p>Issues: ${report.issues.length}</p>
<p>Recommendations: ${report.recommendations.length}</p>
</body>
</html>`;

    }

}
