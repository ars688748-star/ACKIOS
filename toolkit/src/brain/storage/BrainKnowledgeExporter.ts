import { ProjectBrain } from "../ProjectBrain.js";
import { ProjectKnowledge } from "../models/index.js";

export class BrainKnowledgeExporter {

    export(brain: ProjectBrain): ProjectKnowledge {

        return {
            nodes: [],
            edges: [],
            technologies: [],
            risks: [],
            capabilities: [],
            analyses: []
        };

    }

}
