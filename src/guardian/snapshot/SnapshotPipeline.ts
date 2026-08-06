import { SnapshotBuilder } from "./SnapshotBuilder.js";
import { SnapshotWorkspace } from "./SnapshotWorkspace.js";
import { SnapshotCopier } from "./SnapshotCopier.js";
import { SnapshotManifestWriter } from "./SnapshotManifestWriter.js";

import { PublicationFile } from "../models/PublicationFile.js";
import { SnapshotResult } from "../models/SnapshotResult.js";

export class SnapshotPipeline {

    private readonly workspace =
        new SnapshotWorkspace();

    private readonly builder =
        new SnapshotBuilder();

    private readonly copier =
        new SnapshotCopier();

    private readonly manifest =
        new SnapshotManifestWriter();

    public async execute(
        files: PublicationFile[]
    ): Promise<SnapshotResult> {

        await this.workspace.prepare();

        const snapshot =
            await this.builder.execute(files);

        await this.copier.copy(
            snapshot.included
        );

        await this.manifest.write({

            createdAt: new Date().toISOString(),

            profile: "OpenSource",

            totalIncluded: snapshot.included.length,

            totalExcluded: snapshot.excluded.length,

            included: snapshot.included,

            excluded: snapshot.excluded

        });

        return snapshot;

    }

}
