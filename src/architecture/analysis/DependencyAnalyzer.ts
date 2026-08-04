import type { DependencyEdge } from "../graph/DependencyEdge.js";

export interface DependencyAnalysisResult {

    totalDependencies: number;

    incoming: Map<string, number>;

    outgoing: Map<string, number>;

    cycles: string[][];

}

export class DependencyAnalyzer {

    public analyze(
        edges: DependencyEdge[]
    ): DependencyAnalysisResult {

        const incoming = new Map<string, number>();
        const outgoing = new Map<string, number>();

        const graph = new Map<string,string[]>();

        for (const edge of edges) {

            outgoing.set(
                edge.from,
                (outgoing.get(edge.from) ?? 0) + 1
            );

            incoming.set(
                edge.to,
                (incoming.get(edge.to) ?? 0) + 1
            );

            if (!graph.has(edge.from)) {
                graph.set(edge.from, []);
            }

            graph.get(edge.from)!.push(edge.to);

        }

        const cycles: string[][] = [];

        const visited = new Set<string>();

        const dfs = (
            node: string,
            stack: string[]
        ) => {

            if (stack.includes(node)) {

                cycles.push([
                    ...stack.slice(stack.indexOf(node)),
                    node
                ]);

                return;

            }

            if (visited.has(node)) {
                return;
            }

            visited.add(node);

            const next = graph.get(node) ?? [];

            for (const child of next) {

                dfs(child, [...stack, node]);

            }

        };

        for (const node of graph.keys()) {

            dfs(node, []);

        }

        return {

            totalDependencies: edges.length,

            incoming,

            outgoing,

            cycles

        };

    }

}
