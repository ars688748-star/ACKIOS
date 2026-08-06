import { GuardianResult } from "../../../guardian/models/GuardianResult.js";
import { IPublishProvider } from "../../contracts/IPublishProvider.js";

export class FolderProvider implements IPublishProvider {

    public readonly name="folder";

    public async validate():Promise<boolean>{

        return true;

    }

    public async publish(
        snapshot:GuardianResult
    ):Promise<void>{

        console.log("");

        console.log("[Publish] Folder Provider");

        console.log(`Snapshot files: ${snapshot.snapshot?.included.length ?? 0}`);

        console.log("");

    }

}
