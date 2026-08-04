import { GraphEngine } from "./GraphEngine.js";

export class GraphQuery{

    constructor(
        private readonly graph:GraphEngine
    ){}

    neighbors(id:string){
        return this.graph.getEdges(id);
    }

    exists(id:string):boolean{
        return this.graph.hasNode(id);
    }

    reachable(id:string):string[]{

        const visited=new Set<string>();

        const queue=[id];

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

        visited.delete(id);

        return [...visited];

    }

    findPath(from:string,to:string):string[]{

        if(from===to){
            return [from];
        }

        const queue=[from];

        const visited=new Set<string>([from]);

        const previous=new Map<string,string>();

        while(queue.length){

            const current=queue.shift()!;

            for(const edge of this.graph.getEdges(current)){

                if(visited.has(edge.to)){
                    continue;
                }

                visited.add(edge.to);

                previous.set(edge.to,current);

                if(edge.to===to){

                    const path=[to];

                    let node=to;

                    while(previous.has(node)){

                        node=previous.get(node)!;

                        path.unshift(node);

                    }

                    return path;

                }

                queue.push(edge.to);

            }

        }

        return [];

    }

}
