import { describe, expect, test } from "vitest";

import { ACKIOSRuntimeBuilder } from "../ACKIOSRuntimeBuilder.js";

import { PluginExplorerService } from "../../plugins/explorer/PluginExplorerService.js";


describe(
    "PluginExplorer Runtime Integration",
    () => {


        test(
            "provides plugin explorer service",
            async () => {


                const runtime =

                    new ACKIOSRuntimeBuilder()

                        .build();



                await runtime.initialize();



                const explorer =

                    runtime.getService<PluginExplorerService>(

                        "pluginExplorer"

                    );



                const plugins =

                    explorer.getPlugins();



                expect(

                    explorer

                ).toBeDefined();



                expect(

                    plugins.length

                ).toBeGreaterThan(0);



                expect(

                    plugins[0].id

                ).toBe(

                    "demo-gitlab"

                );


            }
        );


    }
);
