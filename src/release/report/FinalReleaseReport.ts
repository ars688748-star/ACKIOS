import type { ReleaseSummary } from "./ReleaseSummary.js";

import type { ReleaseMetrics } from "./ReleaseMetrics.js";

import type { ReleaseChecklist } from "./ReleaseChecklist.js";



export interface FinalReleaseReport {



    readonly summary:

        ReleaseSummary;



    readonly metrics:

        ReleaseMetrics;



    readonly checklist:

        ReleaseChecklist;



    readonly ready:

        boolean;



}
