import { describe, expect, test } from "vitest";

import { DocumentationFactory } from "../DocumentationFactory.js";



describe(

    "DocumentationService",

    () => {


        test(

            "creates documentation package",

            () => {


                const service =

                    DocumentationFactory.create();



                const docs =

                    service.generate();



                expect(

                    docs.length

                ).toBeGreaterThan(0);


            }

        );


    }

);
