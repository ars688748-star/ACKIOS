import { BrainHost } from "../BrainHost.js";
import { WorkspaceService } from "../WorkspaceService.js";
import { GalaxyService } from "../GalaxyService.js";
import { DesktopShell } from "../shell/DesktopShell.js";

export class ApplicationHost {

    private readonly shell =
        new DesktopShell();

    private readonly brain =
        new BrainHost();

    private readonly workspace =
        new WorkspaceService();

    private readonly galaxy =
        new GalaxyService();

    public async initialize(): Promise<void> {

        await this.shell.initialize();

        await this.brain.initialize();

        await this.workspace.initialize();

        await this.galaxy.initialize();

    }

    public async start(): Promise<void> {

        await this.brain.start();

    }

    public async stop(): Promise<void> {

        await this.brain.stop();

        await this.shell.shutdown();

    }

    public getState() {

        return {

            shell: this.shell.getState(),

            brain: this.brain.getState()

        };

    }

}
