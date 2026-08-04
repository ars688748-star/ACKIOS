import { ShellState } from "./ShellState.js";

export class DesktopShell {

    private state =
        ShellState.Starting;

    public async initialize(): Promise<void> {

        this.state =
            ShellState.Ready;

    }

    public async shutdown(): Promise<void> {

        this.state =
            ShellState.Closing;

    }

    public getState(): ShellState {

        return this.state;

    }

}
