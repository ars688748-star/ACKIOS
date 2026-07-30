import { describe, expect, test } from "vitest";

import { OSDetector } from "../OSDetector.js";



describe(

    "OSDetector",

    () => {


        test(

            "detects supported platform",

            () => {


                const detector =

                    new OSDetector();



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
