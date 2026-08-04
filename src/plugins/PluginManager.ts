import { Plugin } from "./Plugin.js";
import { PluginContext } from "./PluginContext.js";
import { RuleRegistry } from "../engine/RuleRegistry.js";
import { RecommendationRegistry } from "../engine/RecommendationRegistry.js";
import { PluginRegistry } from "./PluginRegistry.js";

export class PluginManager {

    constructor(
        private ruleRegistry: RuleRegistry,
        private recommendationRegistry: RecommendationRegistry,
        private pluginRegistry: PluginRegistry
    ) {}


    register(plugin: Plugin): void {

        const ruleRegistry = this.ruleRegistry;
        const recommendationRegistry = this.recommendationRegistry;

        const context: PluginContext = {

            registerRule(rule) {
                ruleRegistry.register(rule);
            },

            registerRecommendation(recommendation) {
                recommendationRegistry.register(
                    recommendation
                );
            },

            log(message: string) {
                console.log(
                    `[PLUGIN] ${message}`
                );
            }

        };

        plugin.activate(context);

        this.pluginRegistry.register(plugin);
    }


    unregister(plugin: Plugin): void {

        plugin.deactivate();

        this.pluginRegistry.unregister(plugin);

    }


    load(plugin: Plugin): void {

        this.register(plugin);

    }


    getPlugins(): Plugin[] {

        return this.pluginRegistry.getPlugins();

    }


    getRules() {

        return this.ruleRegistry.getRules();

    }


    getRecommendations() {

        return this.recommendationRegistry.getRecommendations();

    }

}
