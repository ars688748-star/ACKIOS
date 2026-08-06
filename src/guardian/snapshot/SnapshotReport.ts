import { SnapshotResult } from "../models/SnapshotResult.js";

export class SnapshotReport {

    public static print(
        result:SnapshotResult
    ):void{

        console.log("");
        console.log("Public Snapshot");
        console.log("========================");
        console.log(`Included : ${result.included.length}`);
        console.log(`Excluded : ${result.excluded.length}`);
        console.log("");

    }

}
