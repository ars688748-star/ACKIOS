import type { ArchitectureContext } from "../../model/ArchitectureContext.js";
import type { PipelineStage } from "../PipelineStage.js";

import { ArchitectureReportBuilder } from "../../report/ArchitectureReportBuilder.js";

export class ReportStage implements PipelineStage {

    public readonly name = "Report";

    private readonly builder =
        new ArchitectureReportBuilder();

    public async execute(
        context: ArchitectureContext
    ): Promise<ArchitectureContext> {

        context.report =
            this.builder.build(context);

        return context;

    }

}
