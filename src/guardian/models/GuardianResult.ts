import { PublicationFile } from "./PublicationFile.js";
import { PublicationReport } from "./PublicationReport.js";
import { SnapshotResult } from "./SnapshotResult.js";

export interface GuardianResult {

    files:string[];

    classified:PublicationFile[];

    report:PublicationReport;

    snapshot?:SnapshotResult;

}
