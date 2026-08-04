import { AnalysisIssue } from "../AnalysisIssue.js";
import { RuleContext } from "./RuleContext.js";
import { RuleMetadata } from "./RuleMetadata.js";

export interface Rule {

    readonly metadata: RuleMetadata;

    analyze(
        context: RuleContext
    ): AnalysisIssue[];

}