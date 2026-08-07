import { describe, expect, test } from "vitest";

import { PluginManager } from "../../manager/PluginManager.js";
import { PluginExplorerService } from "../PluginExplorerService.js";


describe(
    "PluginExplorerService",
    () => {


        test(
            "returns plugin view models",
            () => {


                const manager =
                    new PluginManager();



                manager.register({

                    id: "demo-gitlab",

                    name: "Demo GitLab Plugin",

                    version: "1.0.0",

                    status: "installed"

                });



                const explorer =
                    new PluginExplorerService(
                        manager
                    );



                const plugins =
                    explorer.getPlugins();



                expect(
                    plugins.length
                ).toBe(1);



                expect(
                    plugins[0].id
                ).toBe(
                    "demo-gitlab"
                );



                expect(
                    plugins[0].status
                ).toBe(
                    "installed"
                );


            }
        );


    }
);
