import { describe, expect, test } from "vitest";
import { PublicationPluginScanner } from "../scanner/PublicationPluginScanner.js";
import { ExternalPublicationPluginLoader } from "../loader/ExternalPublicationPluginLoader.js";


describe(
    "ExternalPublicationPluginLoader",
    () => {


        test(
            "loads external plugin",
            async () => {


                const scanner =
                    new PublicationPluginScanner();


                const manifests =
                    await scanner.scan(
                        ".ackios/plugins"
                    );


                const loader =
                    new ExternalPublicationPluginLoader();


                const plugin =
                    await loader.load(
                        manifests[0]
                    );


                expect(
                    plugin
                ).toBeDefined();


                expect(
                    plugin?.id
                ).toBeDefined();


            }
        );


    }
);
