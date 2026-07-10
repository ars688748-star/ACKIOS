import { GraphEngine } from "./GraphEngine.js";

export class GraphAnalyzer{

    constructor(
        private readonly graph:GraphEngine
    ){}

    hasCycle():boolean{

        const visited=new Set<string>();

        const stack=new Set<string>();

        const visit=(node:string):boolean=>{

            if(stack.has(node)){
                return true;
            }

            if(visited.has(node)){
                return false;
            }

            visited.add(node);

            stack.add(node);

            for(const edge of this.graph.getEdges(node)){

                if(visit(edge.to)){
                    return true;
                }

            }

            stack.delete(node);

            return false;

        };

        for(const node of this.graph.getNodes()){

            if(visit(node.id)){
                return true;
            }

        }

        return false;

    }

}
