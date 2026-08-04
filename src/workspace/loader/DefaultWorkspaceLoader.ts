import { Workspace } from "../Workspace.js";
import { WorkspaceLoader } from "../contracts/WorkspaceLoader.js";
import { WorkspaceOptions } from "../models/WorkspaceOptions.js";

import { ProjectScanner } from "../../scanner/ProjectScanner.js";

export class DefaultWorkspaceLoader implements WorkspaceLoader {

    public constructor(
        private readonly scanner: ProjectScanner
    ) {}

    public async load(
        options: WorkspaceOptions
    ): Promise<Workspace> {

        const workspace = new Workspace();

        workspace.setState(
            this.scanner.scan(options.root)
        );

        return workspace;

    }

}
