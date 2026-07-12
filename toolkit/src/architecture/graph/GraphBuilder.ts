import type { ArchitectureModel } from "../model/ArchitectureModel.js";
import type { ArchitectureGraph } from "./ArchitectureGraph.js";

export class GraphBuilder {

    public build(
        model: ArchitectureModel
    ): ArchitectureGraph {

        return {

            nodes: model.nodes,

            edges: model.edges

        };

    }

}
