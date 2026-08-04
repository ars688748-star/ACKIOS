import { GraphEngine } from "./GraphEngine.js";
import { GraphQuery } from "./GraphQuery.js";
import { GraphTraversal } from "./GraphTraversal.js";
import { GraphAnalyzer } from "./GraphAnalyzer.js";
import { ImpactAnalyzer } from "./ImpactAnalyzer.js";

export class BrainGraph{

    readonly query:GraphQuery;

    readonly traversal:GraphTraversal;

    readonly analyzer:GraphAnalyzer;

    readonly impact:ImpactAnalyzer;

    constructor(
        readonly engine=new GraphEngine()
    ){

        this.query=new GraphQuery(engine);

        this.traversal=new GraphTraversal(engine);

        this.analyzer=new GraphAnalyzer(engine);

        this.impact=new ImpactAnalyzer(this.query);

    }

}
