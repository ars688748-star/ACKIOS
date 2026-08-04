import { ProjectBrain } from "../ProjectBrain.js";
import { BrainNode, BrainEdge } from "../models/index.js";

export class BrainBuilder {

    private readonly brain = new ProjectBrain();

    getBrain():ProjectBrain{

        return this.brain;

    }

    addNode(node: BrainNode): this {

        this.brain.registerNode(node);

        return this;

    }

    addEdge(edge: BrainEdge): this {

        this.brain.registerEdge(edge);

        return this;

    }

    build(): ProjectBrain {

        return this.brain;

    }

}
