import type { DependencyEdge } from "../graph/DependencyEdge.js";

export interface MetricsResult {

    totalDependencies: number;

    modules: number;

    averageCoupling: number;

}

export class ArchitectureMetrics {

    public calculate(
        edges: DependencyEdge[]
    ): MetricsResult {

        const modules = new Set<string>();

        for (const edge of edges) {

            modules.add(edge.from);
            modules.add(edge.to);

        }

        return {

            totalDependencies: edges.length,

            modules: modules.size,

            averageCoupling:
                modules.size === 0
                    ? 0
                    : edges.length / modules.size

        };

    }

}
