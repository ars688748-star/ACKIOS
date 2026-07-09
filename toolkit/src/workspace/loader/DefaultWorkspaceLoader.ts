import { Workspace } from "../Workspace.js";
import { WorkspaceLoader } from "../contracts/WorkspaceLoader.js";
import { WorkspaceOptions } from "../models/WorkspaceOptions.js";

import { ProjectScanner } from "../../scanner/ProjectScanner.js";

export class DefaultWorkspaceLoader implements WorkspaceLoader {

    public async load(
        options: WorkspaceOptions
    ): Promise<Workspace> {

        const workspace = new Workspace();

        workspace.setState(
            new ProjectScanner().scan(options.root)
        );

        return workspace;

    }

}
