import { describe, expect, test } from "vitest";

import { PluginScanner } from "../PluginScanner.js";


describe(
    "PluginScanner",
    () => {


        test(
            "finds installed plugins",
            async () => {


                const scanner =
                    new PluginScanner();



                const plugins =

                    await scanner.scan(

                        ".ackios/plugins"

                    );



                expect(

                    plugins.length

                ).toBeGreaterThan(0);



                const plugin =

                    plugins.find(

                        item =>

                            item.id === "demo-gitlab"

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
