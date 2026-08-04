import { describe, expect, test } from "vitest";

import { FinalReleaseFactory } from "../FinalReleaseFactory.js";



describe(

    "FinalReleaseService",

    () => {


        test(

            "prepares final ACKIOS release",

            () => {


                const service =

                    FinalReleaseFactory.create();



                const result =

                    service.execute();



                expect(

                    result.report.version

                ).toBe(

                    "1.0.0"

                );



                expect(

                    result.tag.ready

                ).toBe(true);



                expect(

                    result.assets.ready

                ).toBe(true);



                expect(

                    result.confirmation.confirmed

                ).toBe(true);


            }

        );


    }

);
