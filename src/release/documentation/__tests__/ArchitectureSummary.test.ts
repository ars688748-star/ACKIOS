import { describe, expect, test } from "vitest";

import { ArchitectureSummary } from "../ArchitectureSummary.js";



describe(

    "ArchitectureSummary",

    () => {


        test(

            "generates architecture summary",

            () => {


                const summary =

                    new ArchitectureSummary();



                expect(

                    summary.generate()

                ).toContain(

                    "ACKIOS Runtime"

                );


            }

        );


    }

);
