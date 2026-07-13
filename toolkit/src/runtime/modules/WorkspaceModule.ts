import { IRuntimeModule } from "../IRuntimeModule.js";

export class WorkspaceModule implements IRuntimeModule {

    public async initialize(): Promise<void> {}

    public async start(): Promise<void> {}

    public async stop(): Promise<void> {}

    public async dispose(): Promise<void> {}

}
