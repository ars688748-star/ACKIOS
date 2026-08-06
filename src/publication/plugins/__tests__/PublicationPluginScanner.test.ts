import { describe, expect, test } from "vitest";
import { PublicationPluginScanner } from "../scanner/PublicationPluginScanner.js";


describe(
    "PublicationPluginScanner",
    () => {


        test(
            "finds external plugins",
            async () => {


                const scanner =
                    new PublicationPluginScanner();


                const plugins =
                    await scanner.scan(
                        ".ackios/plugins"
                    );


                expect(
                    plugins.length
                ).toBeGreaterThan(0);


                expect(
                    plugins[0].id
                ).toBeDefined();


            }
        );


    }
);
