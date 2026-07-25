import { IAdaptationRule } from "../contracts/IAdaptationRule.js";
import { EnvironmentProfile } from "../../models/EnvironmentProfile.js";
import { AdaptationDecision } from "../models/AdaptationDecision.js";


export class PlatformAdaptationRule implements IAdaptationRule {


    public async evaluate(
        environment: EnvironmentProfile
    ): Promise<AdaptationDecision | null> {


        const os =
            environment.platform.platform;


        switch (os) {


            case "win32":

                return {

                    mode: "windows",

                    reasons: [
                        "Windows platform detected"
                    ],

                    confidence: 0.9

                };


            case "linux":

                return {

                    mode: "linux",

                    reasons: [
                        "Linux platform detected"
                    ],

                    confidence: 0.9

                };


            case "darwin":

                return {

                    mode: "macos",

                    reasons: [
                        "macOS platform detected"
                    ],

                    confidence: 0.9

                };


            default:

                return null;

        }

    }

}

