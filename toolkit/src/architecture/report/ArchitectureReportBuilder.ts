import type { ArchitectureContext } from "../model/ArchitectureContext.js";
import type { ArchitectureReport } from "../model/ArchitectureReport.js";

export class ArchitectureReportBuilder {

    public build(
        context: ArchitectureContext
    ): ArchitectureReport {

        return {

            scannedFiles:
                context.nodes?.filter(
                    node => node.type === "file"
                ).length ?? 0,

            scannedDirectories:
                context.nodes?.filter(
                    node => node.type === "directory"
                ).length ?? 0,

            nodeCount:
                context.graph?.nodes.length ?? 0,

            dependencyCount:
                context.graph?.edges.length ?? 0,

            violations:
                context.violations ?? []

        };

    }

}
