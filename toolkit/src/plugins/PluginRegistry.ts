import { Plugin } from "./Plugin.js";

export class PluginRegistry {

    private plugins: Plugin[] = [];


    register(
        plugin: Plugin
    ): void {

        this.plugins.push(plugin);

    }


    unregister(
        plugin: Plugin
    ): void {

        this.plugins =
            this.plugins.filter(
                item => item !== plugin
            );

    }


    getPlugins(): Plugin[] {

        return this.plugins;

    }


    find(
        id: string
    ): Plugin | undefined {

        return this.plugins.find(
            plugin =>
                plugin.metadata.id === id
        );

    }


    clear(): void {

        this.plugins = [];

    }

}
