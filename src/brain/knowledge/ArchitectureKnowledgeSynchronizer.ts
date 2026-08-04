import { BrainService } from "../services/BrainService.js";

import { ArchitectureModel } from "../../architecture/model/ArchitectureModel.js";
import { ArchitectureKnowledgeMapper } from "../../architecture/knowledge/ArchitectureKnowledgeMapper.js";

import { KnowledgeCategory } from "./KnowledgeCategory.js";
import { KnowledgeManager } from "./KnowledgeManager.js";


export class ArchitectureKnowledgeSynchronizer extends BrainService {

    public readonly name = "ArchitectureKnowledgeSynchronizer";

    private readonly mapper = new ArchitectureKnowledgeMapper();


    public constructor(
        private readonly knowledge: KnowledgeManager
    ) {

        super();

    }


    public synchronize(
        model: ArchitectureModel
    ): void {

        const nodes = this.mapper.map(model);

        for (const node of nodes) {

            const category =
                node.type === "directory"
                    ? KnowledgeCategory.Directory
                    : KnowledgeCategory.File;


            this.knowledge.addNode(
                node,
                category
            );

        }

    }

}
