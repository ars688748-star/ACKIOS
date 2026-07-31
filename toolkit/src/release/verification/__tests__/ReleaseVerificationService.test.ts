import { describe, expect, test } from "vitest";

import { ReleaseVerificationFactory } from "../ReleaseVerificationFactory.js";



describe(

    "ReleaseVerificationService",

    () => {


        test(

            "verifies final release readiness",

            () => {


                const service =

                    ReleaseVerificationFactory.create();



                const result =

                    service.verify();



                expect(

                    result.version

                ).toBe(

                    "1.0.0"

                );



                expect(

                    result.ready

                ).toBe(true);



                expect(

                    result.checks.length

                ).toBeGreaterThan(0);


            }

        );


    }

);
