import type { ArchitectureNode } from "../model/ArchitectureNode.js";
import type { DependencyEdge } from "./DependencyEdge.js";

export interface ArchitectureGraph {

    nodes: ArchitectureNode[];

    edges: DependencyEdge[];

}
