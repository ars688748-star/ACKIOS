import { ProjectBrain } from "../ProjectBrain.js";

export class BrainKnowledgeService {

    constructor(
        private readonly brain: ProjectBrain
    ) {}

    getBrain(): ProjectBrain {

        return this.brain;

    }

}
