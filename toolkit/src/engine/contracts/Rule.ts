import { WorkspaceState } from "../../types/WorkspaceState.js";

import { AnalysisIssue } from "../AnalysisIssue.js";

export interface Rule {

    analyze(
        workspace: WorkspaceState
    ): AnalysisIssue[];

}
