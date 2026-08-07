import { describe, expect, test } from "vitest";

import { PluginManager } from "../PluginManager.js";


describe(
    "PluginManager",
    () => {


        test(
            "registers and lists plugins",
            () => {


                const manager =
                    new PluginManager();



                manager.register({

                    id: "demo-gitlab",

                    name: "Demo GitLab Plugin",

                    version: "1.0.0",

                    status: "installed"

                });



                expect(

                    manager.list().length

                ).toBe(1);



                expect(

                    manager.get("demo-gitlab")?.name

                ).toBe(

                    "Demo GitLab Plugin"

                );


            }
        );





        test(
            "enables and disables plugins",
            () => {


                const manager =
                    new PluginManager();



                manager.register({

                    id: "demo",

                    name: "Demo",

                    version: "1.0.0",

                    status: "installed"

                });



                manager.enable(

                    "demo"

                );



                expect(

                    manager.get("demo")?.status

                ).toBe(

                    "enabled"

                );



                manager.disable(

                    "demo"

                );



                expect(

                    manager.get("demo")?.status

                ).toBe(

                    "disabled"

                );


            }
        );


    }
);
