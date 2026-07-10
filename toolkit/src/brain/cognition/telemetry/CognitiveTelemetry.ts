export class CognitiveTelemetry{

    private readonly counters=new Map<string,number>();

    increment(name:string):void{

        const value=this.counters.get(name) ?? 0;

        this.counters.set(name,value+1);

    }

    metrics(){

        return Object.fromEntries(this.counters);

    }

}
