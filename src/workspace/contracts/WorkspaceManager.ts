import { Workspace } from "../Workspace.js";
import { WorkspaceOptions } from "../models/WorkspaceOptions.js";

export interface WorkspaceManager {
    open(options: WorkspaceOptions): Promise<Workspace>;
    close(): Promise<void>;
    getWorkspace(): Workspace | null;
}
