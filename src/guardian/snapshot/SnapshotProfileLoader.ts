import { readFile } from "node:fs/promises";
import { SnapshotProfile } from "../models/SnapshotProfile.js";

export class SnapshotProfileLoader {

    public async load():Promise<SnapshotProfile>{

        const json = await readFile(

            ".private/guardian/profiles/snapshot.json",

            "utf8"

        );

        return JSON.parse(json);

    }

}
