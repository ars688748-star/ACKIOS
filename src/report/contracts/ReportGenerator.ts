import { AnalysisReport } from "../../engine/AnalysisReport.js";

export interface ReportGenerator {

    generate(
        report: AnalysisReport
    ): string;

}
