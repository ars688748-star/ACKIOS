import { describe, expect, test } from "vitest";

import { PrivateFileRule } from "../PrivateFileRule.js";



describe(

    "PrivateFileRule",

    () => {


        test(

            "detects private files",

            () => {


                const rule =

                    new PrivateFileRule();



                expect(

                    rule.detect(

                        ".private/strategy/data"

                    )

                ).toBe(true);


            }

        );


    }

);
