import { promises as fs } from "fs";
import path from "path";

import { PluginLoader } from "./PluginLoader.js";
import { PluginManager } from "./PluginManager.js";


export class PluginLoaderManager {


    constructor(
        private loader: PluginLoader = new PluginLoader(),
        private manager: PluginManager = new PluginManager()
    ) {}


    async loadDirectory(
        directory: string
    ): Promise<void> {


        const entries =
            await fs.readdir(
                directory,
                {
                    withFileTypes: true
                }
            );


        for (const entry of entries) {


            if (!entry.isDirectory()) {
                continue;
            }


            const pluginPath =
                path.join(
                    directory,
                    entry.name
                );


            try {

                const plugin =
                    await this.loader.load(
                        pluginPath
                    );


                this.manager.register(
                    plugin
                );


            } catch (error) {

                console.error(
                    `Plugin load failed: ${entry.name}`,
                    error
                );

            }

        }

    }


    getManager(): PluginManager {

        return this.manager;

    }

}
