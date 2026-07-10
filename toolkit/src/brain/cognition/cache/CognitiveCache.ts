export class CognitiveCache{

    private readonly storage=new Map<string,unknown>();

    set(key:string,value:unknown):void{

        this.storage.set(key,value);

    }

    get<T>(key:string):T|undefined{

        return this.storage.get(key) as T|undefined;

    }

    has(key:string):boolean{

        return this.storage.has(key);

    }

    clear():void{

        this.storage.clear();

    }

}
