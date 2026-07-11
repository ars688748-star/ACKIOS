import { ProjectBrain } from "../ProjectBrain.js";
import { ProjectKnowledge } from "../models/index.js";

export class BrainKnowledgeExporter {

    public export(
        brain: ProjectBrain
    ): ProjectKnowledge {

        return {

            nodes: brain.registry.nodes.getAll(),

            edges: brain.registry.edges.getAll(),

            technologies: [],

            risks: [],

            capabilities: [],

            analyses: []

        };

    }

}
