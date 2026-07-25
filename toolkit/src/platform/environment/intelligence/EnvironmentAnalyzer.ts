import { EnvironmentProfile } from "../../models/EnvironmentProfile.js";
import { OperatingSystem } from "../../enums/OperatingSystem.js";
import { EnvironmentAnalysis } from "./EnvironmentAnalysis.js";
import { EnvironmentRecommendation } from "./EnvironmentRecommendation.js";


export class EnvironmentAnalyzer {


    public analyze(
        profile: EnvironmentProfile
    ): EnvironmentAnalysis {


        const memory =
            profile.hardware.memory.totalBytes;


        const performance =
            memory > 16_000_000_000
                ? 90
                : memory > 8_000_000_000
                    ? 70
                    : 40;


        const compatibility =
            profile.platform.operatingSystem === OperatingSystem.Unknown
                ? 30
                : 90;


        let recommendation =
            EnvironmentRecommendation.LIGHT_INSTALL;


        if(performance >= 80){

            recommendation =
                EnvironmentRecommendation.FULL_INSTALL;

        }


        return {

            score: {

                performance,

                compatibility,

                readiness:
                    Math.round(
                        (performance + compatibility) / 2
                    )

            },

            recommendation

        };


    }


}

