import { Workspace } from "../Workspace.js";

export interface WorkspaceScanner {
    scan(workspace: Workspace): Promise<void>;
}
