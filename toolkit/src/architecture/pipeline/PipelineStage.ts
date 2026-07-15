import type { ArchitectureContext } from "../model/ArchitectureContext.js";

export interface PipelineStage {

    readonly name: string;

    execute(
        context: ArchitectureContext
    ): Promise<ArchitectureContext>;

}
