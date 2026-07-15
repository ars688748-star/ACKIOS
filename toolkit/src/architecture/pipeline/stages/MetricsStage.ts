import type { ArchitectureContext } from "../../model/ArchitectureContext.js";
import type { PipelineStage } from "../PipelineStage.js";

import { ArchitectureMetrics } from "../../analysis/ArchitectureMetrics.js";

export class MetricsStage implements PipelineStage {

    public readonly name = "Metrics";

    private readonly metrics =
        new ArchitectureMetrics();

    public async execute(
        context: ArchitectureContext
    ): Promise<ArchitectureContext> {

        if (context.model) {

            context.metrics =
                this.metrics.calculate([...context.model.edges]);

        }

        return context;

    }

}
