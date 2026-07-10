import { AdjacencyGraph } from "./AdjacencyGraph.js";

export class GraphQuery {

    constructor(
        private readonly graph: AdjacencyGraph<unknown, unknown>
    ){}

}
