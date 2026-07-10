export class CognitiveSnapshotStore{

    private readonly snapshots=new Map<string,unknown>();

    save(id:string,data:unknown):void{

        this.snapshots.set(id,data);

    }

    load<T>(id:string):T|undefined{

        return this.snapshots.get(id) as T|undefined;

    }

    ids():string[]{

        return [...this.snapshots.keys()];

    }

}
