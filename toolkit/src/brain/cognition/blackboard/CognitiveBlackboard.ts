export class CognitiveBlackboard{

    private readonly board=new Map<string,unknown>();

    write(key:string,value:unknown):void{

        this.board.set(key,value);

    }

    read<T>(key:string):T|undefined{

        return this.board.get(key) as T|undefined;

    }

    snapshot(){

        return Object.fromEntries(this.board);

    }

}
