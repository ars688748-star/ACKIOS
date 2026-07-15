import type { ArchitectureContext } from "../model/ArchitectureContext.js";
import type { PipelineStage } from "./PipelineStage.js";

import { ContextStage } from "./stages/ContextStage.js";
import { ScannerStage } from "./stages/ScannerStage.js";
import { SourceLoaderStage } from "./stages/SourceLoaderStage.js";
import { ParserStage } from "./stages/ParserStage.js";
import { GraphStage } from "./stages/GraphStage.js";
import { DependencyStage } from "./stages/DependencyStage.js";
import { MetricsStage } from "./stages/MetricsStage.js";

export class ArchitecturePipeline {

    private readonly stages: PipelineStage[] = [
        new ContextStage(),
        new ScannerStage(),
        new SourceLoaderStage(),
        new ParserStage(),
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
