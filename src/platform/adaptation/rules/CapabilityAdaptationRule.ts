import { IAdaptationRule } from "../contracts/IAdaptationRule.js";
import { EnvironmentProfile } from "../../models/EnvironmentProfile.js";
import { AdaptationDecision } from "../models/AdaptationDecision.js";


export class CapabilityAdaptationRule implements IAdaptationRule {


    public async evaluate(
        environment: EnvironmentProfile
    ): Promise<AdaptationDecision | null> {


        const capabilities =
            environment.capabilities ?? [];


        if (capabilities.length === 0) {

            return {

                mode: "limited",

                reasons: [
                    "No capabilities detected"
                ],

                confidence: 0.6

            };

        }


        return {

            mode: "capability-ready",

            reasons: [

                "Capabilities detected",

                capabilities.length + " capabilities available"

            ],

            confidence: 0.9

        };


    }

}
