import { Rule } from "../engine/contracts/Rule.js";

export interface PluginContext {

    registerRule(rule: Rule): void;

    registerRecommendation(
        recommendation: import("../engine/contracts/RecommendationProvider.js").RecommendationProvider
    ): void;

    log(message: string): void;

}

