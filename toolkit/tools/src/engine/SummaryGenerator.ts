import { AnalysisIssue } from "./AnalysisIssue.js";

export class SummaryGenerator {

    public create(
        issues: AnalysisIssue[]
    ): string {

        if (issues.length === 0) {

            return "No issues were found.";

        }

        return `Found ${issues.length} issue(s).`;

    }

}
