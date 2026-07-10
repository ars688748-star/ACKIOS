import { GraphEngine } from "./GraphEngine.js";

export class GraphTraversal{

    constructor(
        private readonly graph:GraphEngine
    ){}

    breadthFirst(start:string):string[]{

        const visited=new Set<string>();

        const queue=[start];

        while(queue.length){

            const current=queue.shift()!;

            if(visited.has(current)){
                continue;
            }

            visited.add(current);

            for(const edge of this.graph.getEdges(current)){
                queue.push(edge.to);
            }

        }

        return [...visited];

    }

    depthFirst(start:string):string[]{

        const visited=new Set<string>();

        const stack=[start];

        while(stack.length){

            const current=stack.pop()!;

            if(visited.has(current)){
                continue;
            }

            visited.add(current);

            for(const edge of this.graph.getEdges(current).reverse()){
                stack.push(edge.to);
            }

        }

        return [...visited];

    }

}
