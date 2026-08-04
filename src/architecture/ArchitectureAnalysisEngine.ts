import type { ArchitectureReport } from "./model/ArchitectureReport.js";

import { ArchitecturePipeline } from "./pipeline/ArchitecturePipeline.js";

export class ArchitectureAnalysisEngine {

    public constructor(

        private readonly pipeline =
            new ArchitecturePipeline()

    ) {}

    public async analyze(
        root: string
    ): Promise<ArchitectureReport> {

        const context =
            await this.pipeline.run({
                root
            });

        if (!context.report) {

            throw new Error(
                "Architecture pipeline did not produce a report."
            );

        }

        return context.report;

    }

}
