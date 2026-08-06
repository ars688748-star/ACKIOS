import { describe, expect, test } from "vitest";
import { PublicationPluginRegistry } from "../PublicationPluginRegistry.js";
import { PublicationPluginRuntime } from "../runtime/PublicationPluginRuntime.js";


describe(
    "PublicationPluginRuntime",
    () => {


        test(
            "registers external plugins",
            async () => {


                const registry =
                    new PublicationPluginRegistry();


                const runtime =
                    new PublicationPluginRuntime(
                        registry
                    );


                await runtime.scanExternalPlugins(
                    ".ackios/plugins"
                );


                expect(
                    runtime.plugins().length
                ).toBeGreaterThan(0);


                expect(
                    registry.list().length
                ).toBeGreaterThan(0);


            }
        );


    }
);
