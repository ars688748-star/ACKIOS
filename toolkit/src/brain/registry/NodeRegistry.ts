import { BrainNode } from "../models/index.js";

export class NodeRegistry{

    private readonly nodes=new Map<string,BrainNode>();

    register(node:BrainNode):void{
        this.nodes.set(node.id,node);
    }

    getAll():BrainNode[]{
        return [...this.nodes.values()];
    }

    clear():void{
        this.nodes.clear();
    }

}
