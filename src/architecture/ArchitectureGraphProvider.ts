import type { ArchitectureGraph } from "./graph/ArchitectureGraph.js";

import { ArchitecturePipeline } from "./pipeline/ArchitecturePipeline.js";


export class ArchitectureGraphProvider {

    public constructor(

        private readonly pipeline =
            new ArchitecturePipeline()

    ) {}


    public async getGraph(
        root: string
    ): Promise<ArchitectureGraph> {


        const context =
            await this.pipeline.run({
                root
            });


        if (!context.graph) {

            throw new Error(
                "Architecture pipeline did not produce graph."
            );

        }


        return context.graph;

    }

}
