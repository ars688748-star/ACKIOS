import type { DependencyEdge } from "../graph/DependencyEdge.js";
import type { ArchitectureModel } from "../model/ArchitectureModel.js";
import type { ArchitectureNode } from "../model/ArchitectureNode.js";
import type { SourceFile } from "../source/SourceFile.js";
import { ImportResolver } from "./ImportResolver.js";

export class ArchitectureParser {

    private readonly resolver =
        new ImportResolver();

    public parse(
        files: SourceFile[]
    ): ArchitectureModel {

        const nodes: ArchitectureNode[] = [];
        const edges: DependencyEdge[] = [];

        const importRegex =
            /import\s+.*?\s+from\s+["'](.+?)["']/g;

        for (const file of files) {

            nodes.push({
                name: file.path.split("/").pop() ?? file.path,
                path: file.path,
                type: "file"
            });

            for (const match of file.content.matchAll(importRegex)) {

                edges.push({
                    from: file.path,
                    to: this.resolver.resolve(
                        file.path,
                        match[1]
                    ),
                    type: "import"
                });

            }

        }

        return {
            nodes,
            edges
        };

    }

}



