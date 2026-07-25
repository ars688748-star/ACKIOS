import { EnvironmentProfile } from "../../models/EnvironmentProfile.js";
import { EnvironmentAnalyzer } from "../../environment/intelligence/EnvironmentAnalyzer.js";
import { EnvironmentRecommendation } from "../../environment/intelligence/EnvironmentRecommendation.js";
import { PlatformSetupPlan } from "../models/PlatformSetupPlan.js";


export class PlatformSetupCoordinator {


    public constructor(
        private readonly analyzer: EnvironmentAnalyzer
    ) {}


    public async createPlan(
        profile: EnvironmentProfile
    ): Promise<PlatformSetupPlan> {


        const analysis =
            this.analyzer.analyze(profile);


        return {

            operatingSystem:
                profile.platform.operatingSystem,

            strategy:
                analysis.recommendation,

            components:
                this.getComponents(
                    analysis.recommendation
                ),

            warnings: []

        };

    }


    private getComponents(
        recommendation: EnvironmentRecommendation
    ): string[] {


        switch(recommendation) {


            case EnvironmentRecommendation.FULL_INSTALL:

                return [
                    "workspace",
                    "brain",
                    "knowledge"
                ];


            case EnvironmentRecommendation.LIGHT_INSTALL:

                return [
                    "workspace"
                ];


            case EnvironmentRecommendation.SERVER_MODE:

                return [
                    "runtime",
                    "services"
                ];


            default:

                return [];

        }

    }


}
