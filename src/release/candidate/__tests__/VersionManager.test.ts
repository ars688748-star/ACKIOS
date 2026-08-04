import { describe, expect, test } from "vitest";

import { VersionManager } from "../VersionManager.js";



describe(

    "VersionManager",

    () => {


        test(

            "returns release version",

            () => {


                const manager =

                    new VersionManager();



                expect(

                    manager.current()

                ).toBe(

                    "1.0.0-rc.1"

                );


            }

        );


    }

);
