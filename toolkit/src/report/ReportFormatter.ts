import { AnalysisReport } from "../engine/AnalysisReport.js";

export interface ReportFormatter {

    format(
        report: AnalysisReport
    ): string;

}
