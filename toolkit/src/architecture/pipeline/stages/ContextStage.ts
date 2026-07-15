import type { ArchitectureContext } from "../../model/ArchitectureContext.js";
import type { PipelineStage } from "../PipelineStage.js";

export class ContextStage implements PipelineStage {

    public readonly name = "Context";

    public async execute(
        context: ArchitectureContext
    ): Promise<ArchitectureContext> {

        return context;

    }

}
