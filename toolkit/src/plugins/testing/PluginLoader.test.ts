import { describe, expect, test } from "vitest";

import { PluginLoader } from "../PluginLoader.js";
import { PluginValidator } from "../PluginValidator.js";
import { PluginCompatibility } from "../PluginCompatibility.js";
import { PluginSecurityManager } from "../security/PluginSecurityManager.js";


describe(
    "PluginLoader",
    () => {


        test(
            "loads valid plugin",
            async () => {


                const loader =
                    new PluginLoader(
                        new PluginValidator(),
                        new PluginCompatibility(),
                        new PluginSecurityManager()
                    );


                const plugin =
                    await loader.load(
                        "plugins/example-plugin"
                    );


                expect(
                    plugin.metadata.id
                ).toBe(
                    "example-plugin"
                );


            }
        );


    }
);
