import { describe, expect, test } from "vitest";

import { ReleaseFinalFactory } from "../ReleaseFinalFactory.js";



describe(

    "ReleaseFinalService",

    () => {


        test(

            "finalizes ACKIOS release",

            () => {


                const service =

                    ReleaseFinalFactory.create();



                const report =

                    service.finalize();



                expect(

                    report.version

                ).toBe(

                    "1.0.0"

                );



                expect(

                    report.ready

                ).toBe(true);


            }

        );


    }

);
