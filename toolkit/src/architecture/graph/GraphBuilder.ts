import type { IArchitectureModel } from "../contracts/IArchitectureModel.js";
import type { ArchitectureGraph } from "./ArchitectureGraph.js";

export class GraphBuilder {

    public build(
        model: IArchitectureModel
    ): ArchitectureGraph {

        return {
            nodes: [...model.nodes],
            edges: [...model.edges]
        };

    }

}
