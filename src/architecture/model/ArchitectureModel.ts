import type { ArchitectureNode } from "./ArchitectureNode.js";
import type { DependencyEdge } from "../graph/DependencyEdge.js";

export interface ArchitectureModel {
    nodes: ArchitectureNode[];
    edges: DependencyEdge[];
}
