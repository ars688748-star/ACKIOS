import { describe, expect, test } from "vitest";

import { PackagingEngine } from "../PackagingEngine.js";



describe(

    "PackagingEngine",

    () => {


        test(

            "creates windows package",

            () => {


                const engine =

                    new PackagingEngine();



                const artifact =

                    engine.build(

                        "windows"

                    );



                expect(

                    artifact.name

                ).toBe(

                    "ACKIOS-Windows"

                );


            }

        );


    }

);
