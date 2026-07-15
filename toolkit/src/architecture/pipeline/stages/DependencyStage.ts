import type { ArchitectureContext } from "../../model/ArchitectureContext.js";
import type { PipelineStage } from "../PipelineStage.js";

import { DependencyAnalyzer } from "../../analysis/DependencyAnalyzer.js";

export class DependencyStage implements PipelineStage {

    public readonly name = "Dependency";

    private readonly analyzer =
        new DependencyAnalyzer();

    public async execute(
        context: ArchitectureContext
    ): Promise<ArchitectureContext> {

        if (context.model) {

            context.dependencies =
                this.analyzer.analyze([...context.model.edges]);

        }

        return context;

    }

}
