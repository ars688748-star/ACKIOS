import { ICognitiveStage } from "../integration/ICognitiveStage.js";

export class DecisionCognitiveStage implements ICognitiveStage{

    readonly name="Decision";

    async execute(context:unknown):Promise<void>{

        void context;

    }

}
