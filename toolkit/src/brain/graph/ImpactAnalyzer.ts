import { GraphQuery } from "./GraphQuery.js";

export class ImpactAnalyzer{

    constructor(
        private readonly query:GraphQuery
    ){}

    analyze(nodeId:string):string[]{

        return this.query.reachable(nodeId);

    }

}
