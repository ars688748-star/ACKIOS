import { ProjectKnowledge } from "../models/index.js";

export class MemoryBrainStorage{

    private knowledge:ProjectKnowledge|null=null;

    load():ProjectKnowledge|null{

        return this.knowledge;

    }

    save(knowledge:ProjectKnowledge):void{

        this.knowledge=knowledge;

    }

    clear():void{

        this.knowledge=null;

    }

}
