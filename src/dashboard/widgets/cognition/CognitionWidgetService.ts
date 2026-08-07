import type { CognitiveRuntime } from "../../../brain/cognition/runtime/CognitiveRuntime.js";


export class CognitionWidgetService {


    public constructor(
        private readonly cognition: CognitiveRuntime
    ){}



    public getWidget(){


        return {

            runtime:
                "active",


            state:
                this.cognition,


            cognition:
                "online"


        };


    }


}
