import { WorkspaceState } from "../../types/WorkspaceState.js";
import { AnalysisIssue } from "../AnalysisIssue.js";
import { RuleMetadata } from "./RuleMetadata.js";

export interface Rule {

    readonly metadata: RuleMetadata;

    analyze(
        workspace: WorkspaceState
    ): AnalysisIssue[];

}