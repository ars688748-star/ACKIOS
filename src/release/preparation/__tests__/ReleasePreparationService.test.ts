import { describe, expect, test } from "vitest";

import { ReleasePreparationFactory } from "../ReleasePreparationFactory.js";



describe(

    "ReleasePreparationService",

    () => {


        test(

            "prepares final release",

            () => {


                const service =

                    ReleasePreparationFactory.create();



                const result =

                    service.prepare();



                expect(

                    result.package.valid

                ).toBe(true);



                expect(

                    result.manifest.name

                ).toBe(

                    "ACKIOS"

                );


            }

        );


    }

);
