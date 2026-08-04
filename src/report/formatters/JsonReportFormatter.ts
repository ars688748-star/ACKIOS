import { AnalysisReport } from "../../engine/AnalysisReport.js";
import { ReportFormatter } from "../ReportFormatter.js";

export class JsonReportFormatter implements ReportFormatter {

    public format(
        report: AnalysisReport
    ): string {

        return JSON.stringify(
            report,
            null,
            2
        );

    }

}
