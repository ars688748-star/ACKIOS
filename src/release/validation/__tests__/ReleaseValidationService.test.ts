import { describe, expect, test } from "vitest";

import { ReleaseValidationFactory } from "../ReleaseValidationFactory.js";



describe(

    "ReleaseValidationService",

    () => {


        test(

            "creates release report",

            () => {


                const service =

                    ReleaseValidationFactory.create();



                const report =

                    service.validate();



                expect(

                    report.ready

                ).toBe(true);



                expect(

                    report.checks.length

                ).toBe(3);


            }

        );


    }

);
