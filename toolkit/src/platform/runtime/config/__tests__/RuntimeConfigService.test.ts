import { describe, expect, test } from "vitest";

import { RuntimeConfigService } from "../RuntimeConfigService.js";



describe(

    "RuntimeConfigService",

    () => {


        test(

            "loads runtime config",

            () => {


                const service =

                    new RuntimeConfigService();



                const config =

                    service.get();



                expect(

                    config.environment

                ).toBe(

                    "development"

                );


            }

        );


    }

);
