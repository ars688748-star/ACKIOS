import type { ArchitectureReleaseReport } from "./ArchitectureReleaseReport.js";

import type { RuntimeReleaseReport } from "./RuntimeReleaseReport.js";

import type { TestReleaseReport } from "./TestReleaseReport.js";



export interface FinalQualityReport {



    readonly version:

        string;



    readonly architecture:

        ArchitectureReleaseReport;



    readonly runtime:

        RuntimeReleaseReport;



    readonly tests:

        TestReleaseReport;



    readonly ready:

        boolean;



}
