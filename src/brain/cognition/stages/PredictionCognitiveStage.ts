import { ICognitiveStage } from "../integration/ICognitiveStage.js";

export class PredictionCognitiveStage implements ICognitiveStage{

    readonly name="Prediction";

    async execute(context:unknown):Promise<void>{

        void context;

    }

}
