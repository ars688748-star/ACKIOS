import { WorkspaceScanner } from "../contracts/WorkspaceScanner.js";
import { Workspace } from "../Workspace.js";

export class DefaultWorkspaceScanner implements WorkspaceScanner {

    public async scan(
        _workspace: Workspace
    ): Promise<void> {

        return;

    }

}
