import { WorkspaceState } from "../../types/WorkspaceState.js";
import { WorkspaceOptions } from "../models/WorkspaceOptions.js";

export interface WorkspaceStateLoader {
    load(options: WorkspaceOptions): Promise<WorkspaceState>;
}
