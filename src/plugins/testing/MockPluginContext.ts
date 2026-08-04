import { PluginContext } from "../PluginContext.js";


export class MockPluginContext implements PluginContext {


    rules: unknown[] = [];

    recommendations: unknown[] = [];

    logs: string[] = [];


    registerRule(
        rule: unknown
    ): void {

        this.rules.push(rule);

    }


    registerRecommendation(
        recommendation: unknown
    ): void {

        this.recommendations.push(
            recommendation
        );

    }


    log(
        message: string
    ): void {

        this.logs.push(
            message
        );

    }

}

