import { describe, expect, test } from "vitest";

import { ReleaseSealFactory } from "../ReleaseSealFactory.js";



describe(

    "ReleaseSealService",

    () => {


        test(

            "seals ACKIOS release candidate",

            () => {


                const service =

                    ReleaseSealFactory.create();



                const result =

                    service.seal();



                expect(

                    result.candidate.version

                ).toBe(

                    "1.0.0"

                );



                expect(

                    result.candidate.candidate

                ).toBe(

                    "RC1"

                );



                expect(

                    result.sealed

                ).toBe(true);


            }

        );


    }

);
