import { describe, expect, test } from "vitest";

import { PluginLoader } from "../PluginLoader.js";


describe(
    "PluginLoader",
    () => {


        test(
            "loads valid plugin",
            async () => {


                const loader =
                    new PluginLoader();


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
