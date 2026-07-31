import { describe, expect, test } from "vitest";

import { ReleaseGateFactory } from "../ReleaseGateFactory.js";



describe(

    "ReleaseGateService",

    () => {


        test(

            "creates release decision",

            () => {


                const service =

                    ReleaseGateFactory.create();



                const report =

                    service.validate();



                expect(

                    report.checks.length

                ).toBeGreaterThan(0);



                expect(

                    report.ready

                ).toBe(true);


            }

        );


    }

);
