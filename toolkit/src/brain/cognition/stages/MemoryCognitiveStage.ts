import { ICognitiveStage } from "../integration/ICognitiveStage.js";

export class MemoryCognitiveStage implements ICognitiveStage{

    readonly name="Memory";

    async execute(context:unknown):Promise<void>{

        void context;

    }

}
