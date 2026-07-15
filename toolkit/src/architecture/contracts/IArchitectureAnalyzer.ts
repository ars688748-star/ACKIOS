import type { DependencyEdge } from "../graph/DependencyEdge.js";

export interface IArchitectureAnalyzer<TResult> {

    analyze(edges: DependencyEdge[]): TResult;

}
