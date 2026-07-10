import { promises as fs } from "fs";
import path from "path";

import { Plugin } from "./Plugin.js";
import { PluginValidator } from "./PluginValidator.js";
import { PluginCompatibility } from "./PluginCompatibility.js";
import { PluginSecurityManager } from "./security/PluginSecurityManager.js";


export class PluginLoader {


    constructor(
        private validator: PluginValidator = new PluginValidator(),
        private compatibility: PluginCompatibility = new PluginCompatibility(),
        private security: PluginSecurityManager = new PluginSecurityManager()
    ) {}


    async load(
        directory: string
    ): Promise<Plugin> {


        const manifestPath =
            path.join(
                directory,
                "plugin.json"
            );


        const manifest =
            JSON.parse(
                await fs.readFile(
                    manifestPath,
                    "utf-8"
                )
            );


        if (!this.validator.validate(manifest)) {

            throw new Error(
                "Invalid plugin manifest"
            );

        }


        if (!this.compatibility.check(manifest)) {

            throw new Error(
                "Unsupported plugin API version"
            );

        }


        if (manifest.permissions) {

            if (!this.security.validate(manifest.permissions)) {

                throw new Error(
                    "Plugin permissions rejected"
                );

            }

        }


        const modulePath =
            path.resolve(
                directory,
                manifest.main
            );


        const module =
            await import(
                modulePath
            );


        return module.default as Plugin;

    }

}
