import { ICognitiveStage } from "../integration/ICognitiveStage.js";

export class CognitiveRegistry{

    private readonly stages:ICognitiveStage[]=[];

    register(stage:ICognitiveStage){

        this.stages.push(stage);

    }

    getStages():readonly ICognitiveStage[]{

        return this.stages;

    }

}
