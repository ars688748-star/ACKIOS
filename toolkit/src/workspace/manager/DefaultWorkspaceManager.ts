import { RepositoryLocator } from "../../scanner/RepositoryLocator.js";
import { Workspace } from "../Workspace.js";
import { WorkspaceLoader } from "../contracts/WorkspaceLoader.js";
import { WorkspaceManager } from "../contracts/WorkspaceManager.js";
import { WorkspaceOptions } from "../models/WorkspaceOptions.js";

export class DefaultWorkspaceManager implements WorkspaceManager {

    public constructor(
        private readonly loader: WorkspaceLoader,
        private readonly locator: RepositoryLocator
    ) {}

    private workspace: Workspace | null = null;

    public async open(
        options: WorkspaceOptions
    ): Promise<Workspace> {

        const root =
            this.locator.find(options.root);

        this.workspace =
            await this.loader.load({
                ...options,
                root
            });

        return this.workspace;

    }

    public async close(): Promise<void> {

        this.workspace = null;

    }

    public getWorkspace(): Workspace | null {

        return this.workspace;

    }

    public isOpen(): boolean {

        return this.workspace !== null;

    }

}
