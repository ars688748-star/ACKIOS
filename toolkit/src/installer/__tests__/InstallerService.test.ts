import { describe, expect, test } from "vitest";

import { InstallerFactory } from "../InstallerFactory.js";



describe(

    "InstallerService",

    () => {


        test(

            "creates installer plan",

            () => {


                const service =

                    InstallerFactory.create();



                const result =

                    service.prepare();



                expect(

                    result.config.version

                ).toBe(

                    "1.0.0"

                );



                expect(

                    result.steps.length

                ).toBeGreaterThan(0);


            }

        );


    }

);
