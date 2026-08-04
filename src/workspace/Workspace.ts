import { WorkspaceState } from "../types/WorkspaceState.js";

export class Workspace {

    private state: WorkspaceState | null = null;

    public setState(
        state: WorkspaceState
    ): void {

        this.state = state;

    }

    public getState(): WorkspaceState {

        if (this.state === null) {
            throw new Error("Workspace is not loaded.");
        }

        return this.state;

    }

}
