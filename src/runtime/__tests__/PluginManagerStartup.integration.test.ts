import { describe, expect, test } from "vitest";

import { ACKIOSRuntimeBuilder } from "../ACKIOSRuntimeBuilder.js";

import { PluginManager } from "../../plugins/manager/PluginManager.js";


describe(
    "PluginManager startup discovery",
    () => {


        test(
            "discovers plugins during runtime initialize",
            async () => {


                const runtime =

                    new ACKIOSRuntimeBuilder()

                        .build();



                await runtime.initialize();



                const manager =

                    runtime.getService<PluginManager>(

                        "pluginManager"

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
