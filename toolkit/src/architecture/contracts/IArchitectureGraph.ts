import type { ArchitectureNode } from "../model/ArchitectureNode.js";
import type { DependencyEdge } from "../graph/DependencyEdge.js";

export interface IArchitectureGraph {

    readonly nodes: readonly ArchitectureNode[];

    readonly edges: readonly DependencyEdge[];

}
