import { BrainRegistry } from "./registry/index.js";
import { BrainNode,BrainEdge } from "./models/index.js";
import { BrainGraph } from "./graph/index.js";

export class ProjectBrain{

    readonly registry=new BrainRegistry();

    readonly graph=new BrainGraph();

    registerNode(node:BrainNode):void{

        this.registry.registerNode(node);

        this.graph.engine.addNode({
            id:node.id,
            type:String(node.type),
            data:node
        });

    }

    registerEdge(edge:BrainEdge):void{

        this.registry.registerEdge(edge);

        this.graph.engine.addEdge({
            from:edge.from,
            to:edge.to,
            type:String(edge.relation),
            data:edge
        });

    }

    clear():void{

        this.registry.clear();

        this.graph.engine.clear();

    }

}
