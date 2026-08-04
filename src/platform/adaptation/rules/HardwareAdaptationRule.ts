import { IAdaptationRule } from "../contracts/IAdaptationRule.js";
import { EnvironmentProfile } from "../../models/EnvironmentProfile.js";
import { AdaptationDecision } from "../models/AdaptationDecision.js";


export class HardwareAdaptationRule implements IAdaptationRule {


    public async evaluate(
        environment: EnvironmentProfile
    ): Promise<AdaptationDecision | null> {


        const memoryGB =
            environment.hardware.memory.totalBytes /
            1024 /
            1024 /
            1024;


        const memoryText =
            Math.round(memoryGB) + "GB RAM available";


        if (memoryGB < 8) {

            return {

                mode: "lightweight",

                reasons: [
                    "Low memory detected",
                    memoryText
                ],

                confidence: 0.85

            };

        }


        if (memoryGB < 16) {

            return {

                mode: "standard",

                reasons: [
                    "Moderate memory detected",
                    memoryText
                ],

                confidence: 0.9

            };

        }


        return {

            mode: "performance",

            reasons: [
                "High memory capacity detected",
                memoryText
            ],

            confidence: 0.95

        };


    }

}
