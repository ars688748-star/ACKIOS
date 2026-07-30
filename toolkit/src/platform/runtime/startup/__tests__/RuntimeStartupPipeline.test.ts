import { describe, expect, test } from "vitest";

import { RuntimeStartupPipeline } from "../RuntimeStartupPipeline.js";



describe(

    "RuntimeStartupPipeline",

    () => {


        test(

            "executes startup steps",

            () => {


                const pipeline =

                    new RuntimeStartupPipeline();



                pipeline.add({


                    name:

                        "config",


                    execute(){}


                });



                const report =

                    pipeline.execute();



                expect(

                    report.success

                ).toBe(true);



                expect(

                    report.steps.length

                ).toBe(1);


            }

        );


    }

);
