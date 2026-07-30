import { describe, expect, test } from "vitest";

import { RuntimeDiagnosticsFactory } from "../RuntimeDiagnosticsFactory.js";



describe(

    "RuntimeDiagnosticsService",

    () => {


        test(

            "creates diagnostics report",

            () => {


                const service =

                    RuntimeDiagnosticsFactory.create();



                const report =

                    service.check([


                        {


                            name:

                                "brain",


                            status:

                                "healthy",


                            message:

                                "running"


                        }


                    ]);



                expect(

                    report.diagnostics.length

                ).toBe(1);


            }

        );


    }

);
