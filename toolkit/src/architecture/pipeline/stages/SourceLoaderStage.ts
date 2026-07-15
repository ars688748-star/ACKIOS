import type { ArchitectureContext } from "../../model/ArchitectureContext.js";
import type { PipelineStage } from "../PipelineStage.js";

import { SourceLoader } from "../../source/SourceLoader.js";

export class SourceLoaderStage implements PipelineStage {

    public readonly name = "SourceLoader";

    private readonly loader =
        new SourceLoader();

    public async execute(
        context: ArchitectureContext
    ): Promise<ArchitectureContext> {

        if (!context.availableFiles?.length) {

            return context;

        }

        context.sources =
            await Promise.all(
                context.availableFiles.map(path =>
                    this.loader.load(path)
                )
            );

        return context;

    }

}
