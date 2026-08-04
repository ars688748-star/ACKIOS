export class AdjacencyGraph<_TNode,TEdge>{

    private readonly edges=new Map<string,TEdge[]>();

    connect(id:string,edge:TEdge):void{

        if(!this.edges.has(id)){
            this.edges.set(id,[]);
        }

        this.edges.get(id)!.push(edge);

    }

    clear():void{

        this.edges.clear();

    }

}

