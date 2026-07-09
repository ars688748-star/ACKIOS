import { Workspace } from "../Workspace.js";
import { WorkspaceOptions } from "../models/WorkspaceOptions.js";

export interface WorkspaceLoader {
    load(options: WorkspaceOptions): Promise<Workspace>;
}
