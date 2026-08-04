import type { ArchitectureContext } from "../../model/ArchitectureContext.js";
import type { PipelineStage } from "../PipelineStage.js";

import { ArchitectureParser } from "../../parser/ArchitectureParser.js";

export class ParserStage implements PipelineStage {

    public readonly name = "Parser";

    private readonly parser =
        new ArchitectureParser();

    public async execute(
        context: ArchitectureContext
    ): Promise<ArchitectureContext> {

        if (context.sources) {

            context.model =
                this.parser.parse(
                    [...context.sources],
                    [...(context.availableFiles ?? [])]
                );

        }

        return context;

    }

}
