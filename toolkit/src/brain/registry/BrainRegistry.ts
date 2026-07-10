import { NodeRegistry } from "./NodeRegistry.js";
import { EdgeRegistry } from "./EdgeRegistry.js";
import { RegistryStatistics } from "./RegistryStatistics.js";
import { BrainNode,BrainEdge } from "../models/index.js";

export class BrainRegistry{

    readonly nodes=new NodeRegistry();

    readonly edges=new EdgeRegistry();

    registerNode(node:BrainNode):void{
        this.nodes.register(node);
    }

    registerEdge(edge:BrainEdge):void{
        this.edges.register(edge);
    }

    clear():void{
        this.nodes.clear();
        this.edges.clear();
    }

    statistics():RegistryStatistics{

        return{
            nodeCount:this.nodes.getAll().length,
            edgeCount:this.edges.getAll().length
        };

    }

}
