import { StrategyProfile } from "../models/StrategyProfile.js";
import { AdaptationConfiguration } from "./AdaptationConfiguration.js";


export class AdaptationConfigurationManager {


    public apply(
        strategy: StrategyProfile
    ): AdaptationConfiguration {


        return {

            mode: strategy.mode,

            executionLevel:
                strategy.executionLevel,

            enabledFeatures:
                strategy.enabledFeatures,

            restrictions:
                strategy.restrictions

        };

    }


}
