import { describe, expect, test } from "vitest";

import { FinalQualityFactory } from "../FinalQualityFactory.js";



describe(

    "FinalQualityService",

    () => {


        test(

            "generates final release report",

            () => {


                const service =

                    FinalQualityFactory.create();



                const report =

                    service.generate();



                expect(

                    report.version

                ).toBe(

                    "1.0.0"

                );



                expect(

                    report.ready

                ).toBe(true);



                expect(

                    report.tests.passed

                ).toBe(true);


            }

        );


    }

);
