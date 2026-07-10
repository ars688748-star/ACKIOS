import { ICognitiveStage } from "../integration/ICognitiveStage.js";

export class KnowledgeCognitiveStage implements ICognitiveStage{

    readonly name="Knowledge";

    async execute(context:unknown):Promise<void>{

        void context;

    }

}
