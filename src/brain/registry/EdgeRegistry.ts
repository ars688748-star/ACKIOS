import { BrainEdge } from "../models/index.js";

export class EdgeRegistry{

    private readonly edges=new Map<string,BrainEdge>();

    register(edge:BrainEdge):void{
        this.edges.set(edge.id,edge);
    }

    getAll():BrainEdge[]{
        return [...this.edges.values()];
    }

    clear():void{
        this.edges.clear();
    }

}
