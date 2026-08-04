export class CognitiveResourceManager{

    private readonly resources=new Map<string,unknown>();

    register(name:string,resource:unknown):void{

        this.resources.set(name,resource);

    }

    resolve<T>(name:string):T|undefined{

        return this.resources.get(name) as T|undefined;

    }

}
