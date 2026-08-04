import type { ArchitectureModel } from "../model/ArchitectureModel.js";
import { KnowledgeCategory, KnowledgeNode } from "../../brain/knowledge/index.js";

export class ArchitectureKnowledgeMapper {

    public map(
        model: ArchitectureModel
    ): KnowledgeNode[] {

        return model.nodes.map((node) => {

            const category =
                node.type === "directory"
                    ? KnowledgeCategory.Directory
                    : KnowledgeCategory.File;

            return new KnowledgeNode(
                "architecture:" + node.path,
                category,
                node.name,
                {
                    source: "architecture",
                    path: node.path,
                    architectureType: node.type
                },
                [
                    "architecture",
                    category
                ]
            );

        });

    }

}
