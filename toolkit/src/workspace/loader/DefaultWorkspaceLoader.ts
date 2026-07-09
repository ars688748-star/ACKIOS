import { Workspace } from "../Workspace.js";
import { WorkspaceLoader } from "../contracts/WorkspaceLoader.js";
import { WorkspaceOptions } from "../models/WorkspaceOptions.js";

export class DefaultWorkspaceLoader implements WorkspaceLoader {

    public async load(
        options: WorkspaceOptions
    ): Promise<Workspace> {

        const workspace = new Workspace();

        workspace.updateProject({
            name: "",
            version: "",
            root: options.root
        });

        return workspace;

    }

}
