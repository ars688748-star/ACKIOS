export class CognitiveExecutionContext{

    private readonly values=new Map<string,unknown>();

    set(key:string,value:unknown):void{

        this.values.set(key,value);

    }

    get<T>(key:string):T|undefined{

        return this.values.get(key) as T|undefined;

    }

    has(key:string):boolean{

        return this.values.has(key);

    }

}
