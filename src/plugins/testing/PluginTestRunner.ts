import { Plugin } from "../Plugin.js";
import { MockPluginContext } from "./MockPluginContext.js";


export interface PluginTestResult {

    activated: boolean;

    rules: number;

    recommendations: number;

    logs: number;

}



export class PluginTestRunner {


    test(
        plugin: Plugin
    ): PluginTestResult {


        const context =
            new MockPluginContext();


        plugin.activate(
            context
        );


        const result = {

            activated: true,

            rules:
                context.rules.length,

            recommendations:
                context.recommendations.length,

            logs:
                context.logs.length

        };


        plugin.deactivate();


        return result;

    }

}
