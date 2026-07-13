import { IRuntimeModule } from "../IRuntimeModule.js";
import { ArchitectureAnalysisEngine } from "../../architecture/ArchitectureAnalysisEngine.js";

export class ArchitectureModule implements IRuntimeModule {

    private readonly engine =
        new ArchitectureAnalysisEngine();

    public async initialize(): Promise<void> {

    }

    public async start(): Promise<void> {

    }

    public async stop(): Promise<void> {

    }

    public async dispose(): Promise<void> {

    }

}
