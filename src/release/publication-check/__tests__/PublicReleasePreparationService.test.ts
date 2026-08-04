import { describe, expect, test } from "vitest";

import { PublicReleasePreparationFactory } from "../PublicReleasePreparationFactory.js";



describe(

    "PublicReleasePreparationService",

    () => {


        test(

            "prepares github release",

            () => {


                const service =

                    PublicReleasePreparationFactory.create();



                const result =

                    service.prepare();



                expect(

                    result.version.version

                ).toBe(

                    "1.0.0"

                );



                expect(

                    result.tag.tag

                ).toBe(

                    "v1.0.0"

                );



                expect(

                    result.ready

                ).toBe(true);


            }

        );


    }

);
