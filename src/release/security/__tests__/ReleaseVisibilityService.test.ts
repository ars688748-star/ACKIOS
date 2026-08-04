import { describe, expect, test } from "vitest";

import { ReleaseVisibilityFactory } from "../ReleaseVisibilityFactory.js";



describe(

    "ReleaseVisibilityService",

    () => {


        test(

            "blocks private files",

            () => {


                const service =

                    ReleaseVisibilityFactory.create();



                const report =

                    service.check([


                        "src/index.ts",


                        ".private/roadmap.md"


                    ]);



                expect(

                    report.safe

                ).toBe(false);



                expect(

                    report.privateFiles.length

                ).toBe(1);


            }

        );


    }

);
