export class CognitiveContainer{

    private readonly services=new Map<string,unknown>();

    register(name:string,service:unknown):void{

        this.services.set(name,service);

    }

    resolve<T>(name:string):T|undefined{

        return this.services.get(name) as T|undefined;

    }

    has(name:string):boolean{

        return this.services.has(name);

    }

}
