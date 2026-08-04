import { describe, expect, test } from "vitest";

import { ReleaseExecutionFactory } from "../ReleaseExecutionFactory.js";



describe(

    "ReleaseExecutionService",

    () => {


        test(

            "executes public release",

            () => {


                const service =

                    ReleaseExecutionFactory.create();



                const result =

                    service.execute();



                expect(

                    result.version

                ).toBe(

                    "1.0.0"

                );



                expect(

                    result.ready

                ).toBe(true);



                expect(

                    result.release.provider

                ).toBe(

                    "github"

                );


            }

        );


    }

);
