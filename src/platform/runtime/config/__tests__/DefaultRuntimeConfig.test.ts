import { describe, expect, test } from "vitest";

import { DefaultRuntimeConfig } from "../DefaultRuntimeConfig.js";



describe(

    "DefaultRuntimeConfig",

    () => {


        test(

            "creates default settings",

            () => {


                const config =

                    DefaultRuntimeConfig.create();



                expect(

                    config.brain

                ).toBe(true);



                expect(

                    config.universe

                ).toBe(true);


            }

        );


    }

);
