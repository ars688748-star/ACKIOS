import { describe, expect, test } from "vitest";

import { ACKIOSServiceRegistryBuilder } from "../services/ACKIOSServiceRegistryBuilder.js";
import { ACKIOSContext } from "../ACKIOSContext.js";

import { PluginManager } from "../../plugins/manager/PluginManager.js";


describe(
    "PluginManager Runtime Integration",
    () => {


        test(
            "registers pluginManager service",
            () => {


                const context =
                    new ACKIOSContext();



                new ACKIOSServiceRegistryBuilder().register(
                    context,
                    []
                );



                const manager =
                    context.services.resolve<PluginManager>(
                        "pluginManager"
                    );



                expect(
                    manager
                ).toBeDefined();



                expect(
                    manager
                ).toBeInstanceOf(
                    PluginManager
                );


            }
        );


    }
);
