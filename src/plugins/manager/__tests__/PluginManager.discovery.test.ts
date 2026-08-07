import { describe, expect, test } from "vitest";

import { PluginManager } from "../PluginManager.js";


describe(
    "PluginManager discovery",
    () => {


        test(
            "discovers plugins from workspace",
            async () => {


                const manager =
                    new PluginManager();



                await manager.discover(

                    ".ackios/plugins"

                );



                const plugin =

                    manager.get(

                        "demo-gitlab"

                    );



                expect(

                    plugin

                ).toBeDefined();



                expect(

                    plugin?.status

                ).toBe(

                    "installed"

                );


            }
        );


    }
);
