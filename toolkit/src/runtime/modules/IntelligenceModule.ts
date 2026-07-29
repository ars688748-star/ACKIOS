import { ProjectIntelligenceEngine } from "../../intelligence/ProjectIntelligenceEngine.js";
import { ACKIOSContext } from "../ACKIOSContext.js";
import { IRuntimeModule } from "../IRuntimeModule.js";

export class IntelligenceModule implements IRuntimeModule {

    private intelligence!: ProjectIntelligenceEngine;

    public async initialize(context: ACKIOSContext): Promise<void> {

        this.intelligence =
            context.services.resolve<ProjectIntelligenceEngine>(
                "projectIntelligence"
            );

    }

    public async start(): Promise<void> {

    }

    public async stop(): Promise<void> {

    }

    public async dispose(): Promise<void> {

    }

}
