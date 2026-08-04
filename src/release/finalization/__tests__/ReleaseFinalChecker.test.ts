import { describe, expect, test } from "vitest";

import { ReleaseFinalChecker } from "../ReleaseFinalChecker.js";



describe(

    "ReleaseFinalChecker",

    () => {


        test(

            "passes final checks",

            () => {


                const checker =

                    new ReleaseFinalChecker();



                const result =

                    checker.check();



                expect(

                    Object.values(

                        result

                    ).every(

                        value => value === true

                    )

                ).toBe(true);


            }

        );


    }

);
