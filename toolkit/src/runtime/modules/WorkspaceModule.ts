import { IRuntimeModule } from "../IRuntimeModule.js";
import { ACKIOSContext } from "../ACKIOSContext.js";

export class WorkspaceModule implements IRuntimeModule {

    public async initialize(context: ACKIOSContext): Promise<void> {}

    public async start(): Promise<void> {}

    public async stop(): Promise<void> {}

    public async dispose(): Promise<void> {}

}
