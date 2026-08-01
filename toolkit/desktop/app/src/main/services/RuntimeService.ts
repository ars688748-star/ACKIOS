import { DesktopRuntimeHost } from "../DesktopRuntimeHost.js";
import type { IRuntimeService } from "./IRuntimeService.js";
import { WorkspaceService } from "../workspace/WorkspaceService.js";
import { BrainService } from "../brain/BrainService.js";

export class RuntimeService implements IRuntimeService {

    private readonly runtime =
    new DesktopRuntimeHost();

private readonly workspace =
    new WorkspaceService();

private readonly brain =
    new BrainService();

    public async initialize(): Promise<void> {

        await this.runtime.initialize();

await this.workspace.initialize();

await this.workspace.loadWorkspace();

await this.brain.initialize();

await this.brain.start();

    }

    public async start(): Promise<void> {

        await this.runtime.start();

    }

    public async stop(): Promise<void> {

        await this.brain.stop();

await this.runtime.stop();

    }

    public getStatus() {

        return this.runtime.getStatus();

    }

}


