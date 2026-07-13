import { ArchitectureAnalysisEngine } from "../../architecture/ArchitectureAnalysisEngine.js";

import { ACKIOSContext } from "../ACKIOSContext.js";
import { IRuntimeModule } from "../IRuntimeModule.js";

export class ArchitectureModule implements IRuntimeModule {

    private engine!: ArchitectureAnalysisEngine;

    public async initialize(context: ACKIOSContext): Promise<void> {

        this.engine =
            context.services.resolve<ArchitectureAnalysisEngine>(
                "architectureEngine"
            );

    }

    public async start(): Promise<void> {}

    public async stop(): Promise<void> {}

    public async dispose(): Promise<void> {}

}
