import { describe, expect, test } from "vitest";

import { PlatformDetector } from "../PlatformDetector.js";



describe(

    "PlatformDetector",

    () => {


        test(

            "detects platform",

            () => {


                const detector =

                    new PlatformDetector();



                const result =

                    detector.detect();



                expect(

                    [

                        "windows",

                        "linux",

                        "macos"

                    ]

                ).toContain(

                    result

                );


            }

        );


    }

);
