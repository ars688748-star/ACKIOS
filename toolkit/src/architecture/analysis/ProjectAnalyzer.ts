import type { DependencyEdge } from "../graph/DependencyEdge.js";

import {
    ArchitectureMetrics
} from "./ArchitectureMetrics.js";

import {
    DependencyAnalyzer
} from "./DependencyAnalyzer.js";

export class ProjectAnalyzer {

    private readonly metrics =
        new ArchitectureMetrics();

    private readonly dependencies =
        new DependencyAnalyzer();

    public analyze(
        edges: DependencyEdge[]
    ) {

        return {

            metrics:
                this.metrics.calculate(edges),

            dependencies:
                this.dependencies.analyze(edges)

        };

    }

}
