import { describe, expect, test } from "vitest";

import { PlatformValidationFactory } from "../PlatformValidationFactory.js";



describe(

    "CrossPlatformValidator",

    () => {


        test(

            "validates runtime platform",

            () => {


                const service =

                    PlatformValidationFactory.create();



                const report =

                    service.validate();



                expect(

                    report.ready

                ).toBe(true);


            }

        );


    }

);
