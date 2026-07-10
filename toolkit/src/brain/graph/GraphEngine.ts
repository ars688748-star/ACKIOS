import { GraphNode } from "./models/GraphNode.js";
import { GraphEdge } from "./models/GraphEdge.js";

export class GraphEngine {

    private readonly nodes=new Map<string,GraphNode>();

    private readonly edges=new Map<string,GraphEdge[]>();

    addNode(node:GraphNode):void{

        this.nodes.set(node.id,node);

    }

    removeNode(id:string):void{

        this.nodes.delete(id);

        this.edges.delete(id);

        for(const [key,value] of this.edges){

            this.edges.set(
                key,
                value.filter(edge=>edge.to!==id)
            );

        }

    }

    getNode(id:string):GraphNode|undefined{

        return this.nodes.get(id);

    }

    getNodes():GraphNode[]{

        return [...this.nodes.values()];

    }

    addEdge(edge:GraphEdge):void{

        if(!this.edges.has(edge.from)){
            this.edges.set(edge.from,[]);
        }

        this.edges.get(edge.from)!.push(edge);

    }

    removeEdge(from:string,to:string):void{

        if(!this.edges.has(from)){
            return;
        }

        this.edges.set(
            from,
            this.edges.get(from)!.filter(edge=>edge.to!==to)
        );

    }

    getEdges(id:string):GraphEdge[]{

        return this.edges.get(id)??[];

    }

    hasNode(id:string):boolean{

        return this.nodes.has(id);

    }

    clear():void{

        this.nodes.clear();

        this.edges.clear();

    }

}
