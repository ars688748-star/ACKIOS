import { BrainBuilder } from "../builders/index.js";
import { BrainEdge, BrainRelationType } from "../models/index.js";
import { BrainId } from "../factory/index.js";

export class BrainRelationshipBuilder{

    constructor(
        private readonly builder:BrainBuilder
    ){}

    relate(from:string,to:string,relation:BrainRelationType):this{

        const edge:BrainEdge={

            id:BrainId.create(),

            from,

            to,

            relation

        };

        this.builder.addEdge(edge);

        return this;

    }

}
