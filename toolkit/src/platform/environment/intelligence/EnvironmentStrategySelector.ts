import { EnvironmentRecommendation } from "./EnvironmentRecommendation.js";


export class EnvironmentStrategySelector {


    public select(
        recommendation: EnvironmentRecommendation
    ): string {


        switch(recommendation){


            case EnvironmentRecommendation.FULL_INSTALL:

                return "FULL_AI_WORKSTATION";


            case EnvironmentRecommendation.SERVER_MODE:

                return "SERVER_RUNTIME";


            case EnvironmentRecommendation.LIGHT_INSTALL:

                return "LIGHT_RUNTIME";


            default:

                return "UNSUPPORTED";


        }

    }

}
