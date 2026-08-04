import { describe, expect, test } from "vitest";

import { RuntimeDiagnosticsEngine } from "../RuntimeDiagnosticsEngine.js";



describe(

    "RuntimeDiagnosticsEngine",

    () => {


        test(

            "returns healthy status",

            () => {


                const engine =

                    new RuntimeDiagnosticsEngine();



                const report =

                    engine.analyze([


                        {


                            name:

                                "runtime",


                            status:

                                "healthy",


                            message:

                                "ok"


                        }


                    ]);



                expect(

                    report.status

                ).toBe(

                    "healthy"

                );


            }

        );


    }

);
