import { ICognitiveStage } from "../integration/ICognitiveStage.js";

export class CognitivePipeline{

    private readonly stages:ICognitiveStage[]=[];

    register(stage:ICognitiveStage){

        this.stages.push(stage);

    }

    async execute(context:unknown){

        for(const stage of this.stages){

            await stage.execute(context);

        }

    }

}
