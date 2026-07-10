import { ICognitiveStage } from "../integration/ICognitiveStage.js";

export class ExecutionCognitiveStage implements ICognitiveStage{

    readonly name="Execution";

    async execute(context:unknown):Promise<void>{

        void context;

    }

}
