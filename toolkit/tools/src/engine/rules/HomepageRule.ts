import { WorkspaceState } from "../../types/WorkspaceState.js";

import { AnalysisIssue } from "../AnalysisIssue.js";
import { Rule } from "../contracts/Rule.js";

export class HomepageRule implements Rule {

    public analyze(
        _workspace: WorkspaceState
    ): AnalysisIssue[] {

        return [];

    }

}
