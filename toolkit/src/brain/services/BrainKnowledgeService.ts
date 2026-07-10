import { ProjectBrain } from "../ProjectBrain.js";
import { BrainGraph } from "../graph/index.js";

export class BrainKnowledgeService {

    constructor(
        private readonly brain: ProjectBrain
    ) {}

    getBrain(): ProjectBrain {

        return this.brain;

    }

    getGraph(): BrainGraph {

        return this.brain.graph;

    }

}
