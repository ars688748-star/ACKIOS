import type { ArchitectureNode } from "../model/ArchitectureNode.js";
import type { ArchitectureModel } from "../model/ArchitectureModel.js";

export class ArchitectureParser {

    public parse(
        nodes: ArchitectureNode[]
    ): ArchitectureModel {

        return {

            nodes,

            edges: []

        };

    }

}
