import { describe, expect, test } from "vitest";

import { RuntimeStartupFactory } from "../RuntimeStartupFactory.js";



describe(

    "RuntimeStartupService",

    () => {


        test(

            "starts runtime",

            () => {


                const service =

                    RuntimeStartupFactory.create();



                service.addStep(

                    "initialize"

                );



                const result =

                    service.start();



                expect(

                    result.success

                ).toBe(true);


            }

        );


    }

);
