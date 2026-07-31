import { describe, expect, test } from "vitest";

import { ReleaseFreezeFactory } from "../ReleaseFreezeFactory.js";



describe(

    "ReleaseFreezeService",

    () => {


        test(

            "freezes ACKIOS release",

            () => {


                const service =

                    ReleaseFreezeFactory.create();



                const result =

                    service.freeze();



                expect(

                    result.version.version

                ).toBe(

                    "1.0.0"

                );



                expect(

                    result.frozen

                ).toBe(true);



                expect(

                    result.tag.tag

                ).toBe(

                    "v1.0.0"

                );


            }

        );


    }

);
