import type { ArchitectureModel } from "../model/ArchitectureModel.js";
import type { ArchitectureNode } from "../model/ArchitectureNode.js";
import type { SourceFile } from "../source/SourceFile.js";

export class ArchitectureParser {

    public parse(
        files: SourceFile[]
    ): ArchitectureModel {

        const nodes: ArchitectureNode[] = files.map(file => ({
            name: file.path.split("/").pop() ?? file.path,
            path: file.path,
            type: "file"
        }));

        return {
            nodes,
            edges: []
        };

    }

}
