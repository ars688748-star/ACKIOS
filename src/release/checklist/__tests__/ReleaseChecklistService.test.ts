import { describe, expect, test } from "vitest";

import { ReleaseChecklistFactory } from "../ReleaseChecklistFactory.js";



describe(

    "ReleaseChecklistService",

    () => {


        test(

            "validates public release readiness",

            () => {


                const service =

                    ReleaseChecklistFactory.create();



                const result =

                    service.validate();



                expect(

                    result.version

                ).toBe(

                    "1.0.0"

                );



                expect(

                    result.ready

                ).toBe(true);



                expect(

                    result.items.length

                ).toBeGreaterThan(0);


            }

        );


    }

);
