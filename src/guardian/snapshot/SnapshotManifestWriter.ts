import { writeFile } from "node:fs/promises";

import { SnapshotManifest } from "../models/SnapshotManifest.js";

export class SnapshotManifestWriter {

    public async write(
        manifest:SnapshotManifest
    ):Promise<void>{

        await writeFile(

            ".work/guardian/snapshot/manifest.json",

            JSON.stringify(
                manifest,
                null,
                4
            ),

            "utf8"

        );

    }

}
