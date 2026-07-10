import { CognitivePlugin } from "./CognitivePlugin.js";

export class CognitivePluginHost {

    private readonly plugins: CognitivePlugin[] = [];

    register(plugin: CognitivePlugin): void {

        this.plugins.push(plugin);

    }

    async initialize(): Promise<void> {

        for (const plugin of this.plugins) {

            await plugin.initialize();

        }

    }

    async shutdown(): Promise<void> {

        for (const plugin of [...this.plugins].reverse()) {

            if (typeof plugin.shutdown === "function") {

                await plugin.shutdown();

            }

        }

    }

    getPlugins(): readonly CognitivePlugin[] {

        return [...this.plugins];

    }

}
