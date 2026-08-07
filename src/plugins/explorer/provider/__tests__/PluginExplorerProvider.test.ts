import { describe, expect, test } from "vitest";

import { PluginManager } from "../../../manager/PluginManager.js";

import { PluginExplorerService } from "../../PluginExplorerService.js";

import { PluginExplorerProvider } from "../PluginExplorerProvider.js";



describe(
    "PluginExplorerProvider",
    () => {


        test(
            "provides explorer plugins",
            () => {


                const manager =
                    new PluginManager();



                manager.register({

                    id: "demo-gitlab",

                    name: "Demo GitLab Plugin",

                    version: "1.0.0",

                    status: "installed"

                });



                const service =
                    new PluginExplorerService(
                        manager
                    );



                const provider =
                    new PluginExplorerProvider(
                        service
                    );



                const plugins =
                    provider.getPlugins();



                expect(
                    plugins.length
                ).toBe(1);



                expect(
                    plugins[0].id
                ).toBe(
                    "demo-gitlab"
                );


            }
        );


    }
);
