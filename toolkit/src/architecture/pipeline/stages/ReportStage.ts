import type { ArchitectureContext } from "../../model/ArchitectureContext.js";
import type { PipelineStage } from "../PipelineStage.js";

export class ReportStage implements PipelineStage {

    public readonly name = "Report";

    public async execute(
        context: ArchitectureContext
    ): Promise<ArchitectureContext> {

        return context;

    }

}
