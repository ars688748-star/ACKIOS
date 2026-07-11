import { KnowledgeManager } from "../knowledge/KnowledgeManager.js";
import { ProjectKnowledge } from "../models/index.js";

export class BrainKnowledgeExporter {

    public export(
        knowledge: KnowledgeManager
    ): ProjectKnowledge {

        return {

            nodes: [...knowledge.getNodes()],

            edges: [...knowledge.getRelations()],

            technologies: [],

            risks: [],

            capabilities: [],

            analyses: []

        };

    }

}
