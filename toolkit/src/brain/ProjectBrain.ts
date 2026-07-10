import { BrainRegistry } from "./registry/index.js";
import { BrainNode,BrainEdge } from "./models/index.js";

export class ProjectBrain{

    readonly registry=new BrainRegistry();

    registerNode(node:BrainNode):void{
        this.registry.registerNode(node);
    }

    registerEdge(edge:BrainEdge):void{
        this.registry.registerEdge(edge);
    }

    clear():void{
        this.registry.clear();
    }

}
