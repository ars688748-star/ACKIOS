import { ProjectKnowledge } from "../models/index.js";
import { BrainBuilder } from "../builders/index.js";

export class ProjectKnowledgeProvider {

    populate(builder: BrainBuilder, knowledge: ProjectKnowledge): void {

        for (const node of knowledge.nodes) {

            builder.addNode(node);

        }

        for (const edge of knowledge.edges) {

            builder.addEdge(edge);

        }

    }

}
