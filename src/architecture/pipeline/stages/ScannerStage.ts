import type { ArchitectureContext } from "../../model/ArchitectureContext.js";
import type { PipelineStage } from "../PipelineStage.js";

import { ArchitectureScanner } from "../../scanner/ArchitectureScanner.js";

export class ScannerStage implements PipelineStage {

    public readonly name = "Scanner";

    private readonly scanner =
        new ArchitectureScanner();

    public async execute(
        context: ArchitectureContext
    ): Promise<ArchitectureContext> {

        if (!context.root) {

            return context;

        }

        const nodes =
            await this.scanner.scan(context.root);

        context.nodes = nodes;

        context.availableFiles =
            nodes
                .filter(node => node.type === "file")
                .map(node => node.path);

        return context;

    }

}
