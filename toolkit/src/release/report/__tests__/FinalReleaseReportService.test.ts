import { describe, expect, test } from "vitest";

import { FinalReleaseReportFactory } from "../FinalReleaseReportFactory.js";



describe(

    "FinalReleaseReportService",

    () => {


        test(

            "generates final release report",

            () => {


                const service =

                    FinalReleaseReportFactory.create();



                const result =

                    service.generate();



                expect(

                    result.summary.version

                ).toBe(

                    "1.0.0"

                );



                expect(

                    result.ready

                ).toBe(true);



                expect(

                    result.metrics.passed

                ).toBe(true);



                expect(

                    result.checklist.complete

                ).toBe(true);


            }

        );


    }

);
