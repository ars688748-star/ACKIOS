import { EnvironmentProfile } from "../../models/EnvironmentProfile.js";
import { AdaptationDecision } from "../models/AdaptationDecision.js";


export interface IAdaptationRule {


    evaluate(
        environment: EnvironmentProfile
    ): Promise<AdaptationDecision | null>;


}
