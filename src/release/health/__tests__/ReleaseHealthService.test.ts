import { describe, expect, test } from "vitest";

import { ReleaseHealthFactory } from "../ReleaseHealthFactory.js";



describe(

    "ReleaseHealthService",

    () => {


        test(

            "checks release health",

            () => {


                const service =

                    ReleaseHealthFactory.create();



                const result =

                    service.check();



                expect(

                    result.version

                ).toBe(

                    "1.0.0"

                );



                expect(

                    result.healthy

                ).toBe(true);



                expect(

                    result.checks.length

                ).toBeGreaterThan(0);


            }

        );


    }

);
