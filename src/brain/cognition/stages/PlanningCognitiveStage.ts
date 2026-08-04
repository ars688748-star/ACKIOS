import { ICognitiveStage } from "../integration/ICognitiveStage.js";

export class PlanningCognitiveStage implements ICognitiveStage{

    readonly name="Planning";

    async execute(context:unknown):Promise<void>{

        void context;

    }

}
