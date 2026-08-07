import { describe, expect, test } from "vitest";

import { ACKIOSRuntimeBuilder } from "../ACKIOSRuntimeBuilder.js";

import { PluginExplorerProvider } from "../../plugins/explorer/provider/PluginExplorerProvider.js";


describe(
    "PluginExplorerProvider Runtime Integration",
    () => {


        test(
            "provides plugin explorer provider service",
            async () => {


                const runtime =

                    new ACKIOSRuntimeBuilder()

                        .build();



                await runtime.initialize();



                const provider =

                    runtime.getService<PluginExplorerProvider>(

                        "pluginExplorerProvider"

                    );



                const plugins =

                    provider.getPlugins();



                expect(

                    provider

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
