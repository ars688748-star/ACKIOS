import type { ProjectIntelligenceEngine } from "../../../intelligence/ProjectIntelligenceEngine.js";


export class IntelligenceWidgetService {


    public constructor(
        private readonly intelligence: ProjectIntelligenceEngine
    ){}



    public getWidget(){


        return {

            runtime:
                "active",


            engine:
                "ProjectIntelligenceEngine",


            status:
                "ready"


        };


    }


}
