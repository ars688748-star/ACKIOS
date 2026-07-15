import type { ArchitectureContext } from "../model/ArchitectureContext.js";
import type { PipelineStage } from "./PipelineStage.js";

import { ContextStage } from "./stages/ContextStage.js";
import { GraphStage } from "./stages/GraphStage.js";
import { DependencyStage } from "./stages/DependencyStage.js";
import { MetricsStage } from "./stages/MetricsStage.js";

export class ArchitecturePipeline {

    private readonly stages: PipelineStage[] = [
        new ContextStage(),
        new GraphStage(),
        new DependencyStage(),
        new MetricsStage()
    ];

    public async run(
        context: ArchitectureContext
    ): Promise<ArchitectureContext> {

        context.completedStages = [];

        let current = context;

        for (const stage of this.stages) {

            current = await stage.execute(current);

            current.completedStages = [
                ...(current.completedStages ?? []),
                stage.name
            ];

        }

        return current;

    }

}
