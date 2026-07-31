import { describe, expect, test } from "vitest";

import { ReleaseValidationEngine } from "../ReleaseValidationEngine.js";



describe(

    "ReleaseValidationEngine",

    () => {


        test(

            "marks release ready",

            () => {



                const engine =

                    new ReleaseValidationEngine();



                const report =

                    engine.evaluate([


                        {


                            name:

                                "build",


                            status:

                                "pass",


                            message:

                                "ok"


                        }


                    ]);



                expect(

                    report.ready

                ).toBe(true);


            }

        );


    }

);
