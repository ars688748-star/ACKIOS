import { describe, expect, test } from "vitest";

import { PublicLaunchFactory } from "../PublicLaunchFactory.js";



describe(

    "PublicLaunchService",

    () => {


        test(

            "prepares ACKIOS public launch",

            () => {


                const service =

                    PublicLaunchFactory.create();



                const result =

                    service.launch();



                expect(

                    result.release.version

                ).toBe(

                    "1.0.0"

                );



                expect(

                    result.published

                ).toBe(true);



                expect(

                    result.report.message

                ).toContain(

                    "ready"

                );


            }

        );


    }

);
