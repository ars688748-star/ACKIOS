import { ArchitectureInspector } from "../inspector/services/ArchitectureInspector.js";
import { ArchitectureInspectionResult } from "../inspector/models/ArchitectureInspectionResult.js";

export class ArchitectureHealthProvider{

    public constructor(

        private readonly inspector:ArchitectureInspector

    ){}

    public async analyze():Promise<ArchitectureInspectionResult>{

        return await this.inspector.inspect();

    }

}
