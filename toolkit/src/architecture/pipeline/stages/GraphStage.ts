import type { ArchitectureContext } from "../../model/ArchitectureContext.js";
import type { PipelineStage } from "../PipelineStage.js";

import { GraphBuilder } from "../../graph/GraphBuilder.js";

export class GraphStage implements PipelineStage {

    public readonly name = "Graph";

    private readonly builder = new GraphBuilder();

    public async execute(
        context: ArchitectureContext
    ): Promise<ArchitectureContext> {

        if (context.model) {

            context.graph = this.builder.build(context.model);

        }

        return context;

    }

}
